
import React, { useMemo, useState } from "react";
import articles from "./articles.js";

const thinger = {
  primary: "#1DA1E2",
  primaryDark: "#1689c2",
  bg: "#f3f6f9",
  panel: "#ffffff",
  panelSoft: "#f7fafc",
  border: "#d9e3ea",
  text: "#2b2f33",
  subtext: "#6f7b86",
  success: "#27ae60"
};

const stopwords = new Set([
  "ja",
  "on",
  "olla",
  "että",
  "joka",
  "jotka",
  "kun",
  "jos",
  "tai",
  "sekä",
  "myös",
  "voi",
  "voin",
  "miten",
  "mikä",
  "miksi",
  "missä",
  "milloin",
  "mitä",
  "tämä",
  "tuo",
  "saa",
  "ovat",
  "oli",
  "ole",
  "olee",
  "kuin",
  "vain",
  "kautta",
  "jälkeen",
  "ennen",
  "sitten",
  "ensin",
  "vielä",
  "jo",
  "eli",
  "niin",
  "kuinka",
  "tehdä",
  "tekee",
  "tehdään",
  "minun",
  "minulla",
  "minä",
  "me",
  "te",
  "ne",
  "se",
  "näin",
  "tällä",
  "tähän",
  "siellä",
  "nämä",
  "tuolla",
  "voiko",
  "mitäs",
  "olisiko",
  "haluan"
]);

const cannedQuestions = [
  "Miten luon uuden tarjouspyynnön?",
  "Voinko lisätä vastaanottajia jo lähetettyyn tarjouspyyntöön?",
  "Miten vertailen tarjouksia ja saan ne Exceliin?",
  "Miten toimittaja rekisteröityy?",
  "Mitä raportteja järjestelmässä on?",
  "Miten lisään tuntikirjauksen tarjouspyynnölle?",
  "Miten vaihdan salasanan?",
  "Mitä uutta helmikuun 2026 päivityksessä tuli?"
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9åäö\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token && token.length > 2 && !stopwords.has(token));
}

function makeSnippet(content, tokens) {
  if (!content) return "";
  const normalizedContent = normalize(content);

  for (const token of tokens) {
    const index = normalizedContent.indexOf(token);
    if (index !== -1) {
      const start = Math.max(0, index - 90);
      const end = Math.min(content.length, index + 170);
      let snippet = content.slice(start, end).trim();
      if (start > 0) snippet = "..." + snippet;
      if (end < content.length) snippet = snippet + "...";
      return snippet;
    }
  }

  return content.slice(0, 220).trim() + (content.length > 220 ? "..." : "");
}

function scoreArticle(article, question) {
  const qTokens = tokenize(question);
  const title = normalize(article.title || "");
  const category = normalize(article.category || "");
  const content = normalize(article.content || "");
  const url = normalize(article.url || "");

  let score = 0;
  let matchedTokens = [];

  for (const token of qTokens) {
    let matched = false;

    if (title.includes(token)) {
      score += 8;
      matched = true;
    }

    if (category.includes(token)) {
      score += 5;
      matched = true;
    }

    if (content.includes(token)) {
      score += 3;
      matched = true;
    }

    if (url.includes(token)) {
      score += 1;
      matched = true;
    }

    if (!matched) {
      const partialHit =
        title.split(" ").some((w) => w.startsWith(token) || token.startsWith(w)) ||
        category.split(" ").some((w) => w.startsWith(token) || token.startsWith(w)) ||
        content.split(" ").some((w) => w.startsWith(token) || token.startsWith(w));

      if (partialHit) {
        score += 1.5;
        matched = true;
      }
    }

    if (matched) matchedTokens.push(token);
  }

  const q = normalize(question);

  if (q.includes("raport") && category.includes("raport")) score += 6;
  if (q.includes("toimitt") && (title.includes("toimitt") || category.includes("toimitt"))) score += 6;
  if (q.includes("tarjouspyynt") && (title.includes("tarjouspyynt") || content.includes("tarjouspyynt"))) score += 6;
  if (q.includes("salasana") && title.includes("salasana")) score += 8;
  if (q.includes("vastaanott") && content.includes("vastaanott")) score += 5;
  if (q.includes("rekister") && title.includes("rekister")) score += 5;
  if (q.includes("paivitys") || q.includes("uutta")) {
    if (category.includes("mita uutta") || title.includes("paivitys")) score += 6;
  }

  if (matchedTokens.length >= 2) score += 4;
  if (matchedTokens.length >= 3) score += 4;

  return {
    article,
    score,
    matchedTokens: [...new Set(matchedTokens)]
  };
}

function buildAnswer(best, topMatches, question) {
  const tokens = tokenize(question);
  const snippet = makeSnippet(best.content, tokens);

  let intro = `Löysin tähän parhaiten artikkelin **${best.title}**.`;

  if (best.title === "Miten luon uuden tarjouspyynnön?") {
    intro +=
      " Uusi tarjouspyyntö luodaan päänäkymän oikean yläkulman Lisää-painikkeesta. Sen jälkeen annat tarjouspyynnölle nimen tai valitset valmiin otsikon ja painat Luo tarjouspyyntö.";
  } else if (best.title === "Miten lisään vastaanottajia jo lähetettyyn tarjouspyyntöön?") {
    intro +=
      " Vastaanottajia voi lisätä jälkikäteen Toiminnot-valikon kautta kohdasta Lisää vastaanottaja. Heitä voi lisätä sähköpostilla tai hakea toimittajarekisteristä.";
  } else if (best.title === "Miten vertailen saamiani tarjouksia?") {
    intro +=
      " Kun tarjousaika on päättynyt, tarjoukset näkyvät vertailunäkymässä ja vertailun voi ladata Exceliin jatkokäsittelyä varten.";
  } else if (best.title === "Toimittajan rekisteröinti") {
    intro +=
      " Toimittaja kirjautuu kertakäyttöisellä sähköpostikoodilla ja täydentää rekisteröinnissä yrityksen tiedot, palvelut ja toimialueen.";
  } else if (best.title === "Raportit") {
    intro +=
      " Järjestelmässä on neljä raporttia: Yleiskuva, Vastuullisuus, Palautteet ja Käyttöönotto.";
  } else if (best.title === "Unohditko salasanasi?") {
    intro +=
      " Salasanan vaihto tehdään kirjautumisikkunasta kohdasta Unohditko salasanasi?, jonka jälkeen käyttäjä saa vaihtolinkin sähköpostiin.";
  } else {
    intro += ` ${snippet}`;
  }

  if (topMatches.length > 1) {
    intro += " Alla näkyy myös muita mahdollisesti hyödyllisiä lähteitä samasta aiheesta.";
  }

  return intro;
}

export default function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hei! Tämä versio hakee vastauksia oikeista articles.json-tiedoston artikkeleista ilman API-avainta. Kokeile kysyä esimerkiksi tarjouspyynnöistä, toimittajista, raporteista tai salasanan vaihdosta.",
      sources: []
    }
  ]);

  const stats = useMemo(() => {
    const categories = [...new Set(articles.map((a) => a.category))].length;
    return { articles: articles.length, categories };
  }, []);

  const answerQuestion = (q) => {
    const ranked = articles
      .map((article) => scoreArticle(article, q))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const topMatches = ranked.slice(0, 3);

    if (!topMatches.length) {
      return {
        text:
          "En löytänyt tähän vastausta nykyisestä artikkelidatasta. Kokeile eri sanamuotoa tai käytä avainsanoja kuten tarjouspyyntö, toimittaja, raportit, rekisteröinti tai salasana.",
        sources: []
      };
    }

    const best = topMatches[0].article;
    const text = buildAnswer(best, topMatches, q);

    return {
      text,
      sources: topMatches.map((item) => item.article)
    };
  };

  const sendQuestion = (q) => {
    const trimmed = q.trim();
    if (!trimmed) return;

    const reply = answerQuestion(trimmed);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed, sources: [] },
      { role: "assistant", text: reply.text, sources: reply.sources }
    ]);

    setQuestion("");
  };

  const Bubble = ({ role, text, sources }) => (
    <div
      style={{
        display: "flex",
        justifyContent: role === "user" ? "flex-end" : "flex-start"
      }}
    >
      <div
        style={{
          maxWidth: "48rem",
          borderRadius: 24,
          padding: "14px 16px",
          boxShadow: "0 8px 24px rgba(22, 42, 58, 0.06)",
          background: role === "user" ? thinger.primary : thinger.panel,
          color: role === "user" ? "white" : thinger.text,
          border: role === "user" ? "none" : `1px solid ${thinger.border}`
        }}
      >
        <div
          className="text-sm leading-6 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          }}
        />

        {role === "assistant" && sources?.length > 0 && (
          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${thinger.border}`,
              paddingTop: 14
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: thinger.subtext
              }}
            >
              Lähteet
            </div>

            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {sources.map((source) => (
                <a
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    borderRadius: 18,
                    border: `1px solid ${thinger.border}`,
                    background: thinger.panelSoft,
                    padding: "10px 12px",
                    textDecoration: "none"
                  }}
                >
                  <div style={{ fontWeight: 600, color: thinger.text }}>
                    {source.title}
                  </div>
                  <div style={{ color: thinger.subtext, marginTop: 2, fontSize: 13 }}>
                    {source.category}
                    {source.updated ? ` · päivitetty ${source.updated}` : ""}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: thinger.bg,
        color: thinger.text,
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[340px,1fr]"
        style={{ padding: 24 }}
      >
        <aside className="space-y-4">
          <div
            className="shadow-lg"
            style={{
              borderRadius: 28,
              background: `linear-gradient(135deg, ${thinger.primary} 0%, ${thinger.primaryDark} 100%)`,
              padding: 24,
              color: "white"
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.82
              }}
            >
              PoC
            </div>
            <h1
              style={{
                marginTop: 10,
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              Thinger Hankinta AI-avustaja
            </h1>
            <p
              style={{
                marginTop: 14,
                fontSize: 14,
                lineHeight: 1.65,
                opacity: 0.94
              }}
            >
              Tämä versio käyttää oikeita artikkeleita ilman OpenAI-avainta.
              Vastaukset perustuvat hakupisteytykseen ja lähdeartikkelien sisältöön.
            </p>
          </div>

          <div
            className="shadow-sm"
            style={{
              borderRadius: 24,
              background: thinger.panel,
              padding: 20,
              border: `1px solid ${thinger.border}`
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700 }}>Tietopohja</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div
                style={{
                  borderRadius: 20,
                  background: thinger.panelSoft,
                  padding: 14,
                  border: `1px solid ${thinger.border}`
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: thinger.primaryDark
                  }}
                >
                  {stats.articles}
                </div>
                <div style={{ color: thinger.subtext }}>artikkelia</div>
              </div>
              <div
                style={{
                  borderRadius: 20,
                  background: thinger.panelSoft,
                  padding: 14,
                  border: `1px solid ${thinger.border}`
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: thinger.primaryDark
                  }}
                >
                  {stats.categories}
                </div>
                <div style={{ color: thinger.subtext }}>kategoriaa</div>
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 14,
                color: thinger.subtext,
                lineHeight: 1.7
              }}
            >
              Tämä ei vielä muodosta generatiivista AI-vastausta, vaan hakee
              parhaat osumat oikeista artikkeleista ja näyttää niihin perustuvan
              vastauksen.
            </div>
          </div>

          <div
            className="shadow-sm"
            style={{
              borderRadius: 24,
              background: thinger.panel,
              padding: 20,
              border: `1px solid ${thinger.border}`
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700 }}>Kokeile näitä kysymyksiä</div>
            <div className="mt-3 flex flex-col gap-2">
              {cannedQuestions.map((item) => (
                <button
                  key={item}
                  onClick={() => sendQuestion(item)}
                  style={{
                    borderRadius: 18,
                    border: `1px solid ${thinger.border}`,
                    background: thinger.panelSoft,
                    padding: "10px 12px",
                    textAlign: "left",
                    fontSize: 14,
                    color: thinger.text,
                    transition: "all 0.2s ease",
                    cursor: "pointer"
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main
          className="shadow-sm"
          style={{
            borderRadius: 28,
            border: `1px solid ${thinger.border}`,
            background: thinger.panel,
            overflow: "hidden"
          }}
        >
          <div
            style={{
              borderBottom: `1px solid ${thinger.border}`,
              padding: "20px 24px",
              background: thinger.panel
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 700 }}>Kysy tukisisällöstä</div>
            <div style={{ fontSize: 14, color: thinger.subtext, marginTop: 4 }}>
              Esimerkki: “Miten toimittaja rekisteröityy?” tai “Mitä raportteja järjestelmässä on?”
            </div>
          </div>

          <div
            style={{
              height: 560,
              overflowY: "auto",
              padding: 24,
              background: "#eef4f8"
            }}
            className="space-y-4"
          >
            {messages.map((message, index) => (
              <Bubble
                key={index}
                role={message.role}
                text={message.text}
                sources={message.sources}
              />
            ))}
          </div>

          <div
            style={{
              borderTop: `1px solid ${thinger.border}`,
              padding: 16,
              background: thinger.panel
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendQuestion(question);
                }}
                placeholder="Kirjoita kysymys suomeksi..."
                style={{
                  flex: 1,
                  borderRadius: 18,
                  border: `1px solid ${thinger.border}`,
                  padding: "14px 16px",
                  outline: "none",
                  fontSize: 15,
                  background: thinger.panelSoft
                }}
              />
              <button
                onClick={() => sendQuestion(question)}
                style={{
                  borderRadius: 18,
                  background: thinger.success,
                  color: "white",
                  border: "none",
                  padding: "14px 20px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(39,174,96,0.22)"
                }}
              >
                Kysy
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

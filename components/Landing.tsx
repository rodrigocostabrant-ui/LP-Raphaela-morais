"use client";

// Markup convertido do Claude Design (Dra Raphaela Morais - Landing.dc.html).
// Textos de listas e contatos ficam em content/site.ts; comportamento em useLanding.ts.
import { Fragment } from "react";
import ImageSlot from "./ImageSlot";
import { useLanding } from "./useLanding";

export default function Landing() {
  const { faqs, headlineA, headlineB, procs, showPending, waHref, words } = useLanding();
  return (
    <>
      <div style={{ fontFamily: "var(--font-jost),sans-serif", fontWeight: "300", background: "#F7F5F2", color: "#111111", overflowX: "clip", position: "relative" }}>
        <header data-nav="" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "18px clamp(20px,4vw,56px)", transition: "background .4s ease, backdrop-filter .4s ease, border-color .4s ease", borderBottom: "1px solid transparent" }}>
          <a href="#topo" style={{ display: "flex", flexDirection: "column", gap: "2px", lineHeight: "1" }}>
            <span style={{ fontFamily: "var(--font-jost),sans-serif", fontWeight: "300", fontSize: "15px", letterSpacing: ".34em", textTransform: "uppercase" }}>
              {"Raphaela Morais"}
            </span>
            <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "500", fontSize: "9px", letterSpacing: ".32em", color: "#6B6258" }}>
              {"HARMONIZAÇÃO OROFACIAL · CRO 63940"}
            </span>
          </a>
          <nav className="only-wide" style={{ display: "flex", gap: "30px", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase" }}>
            <a href="#filosofia">
              {"Filosofia"}
            </a>
            <a href="#procedimentos">
              {"Procedimentos"}
            </a>
            <a href="#consultorio">
              {"Consultório"}
            </a>
            <a href="#sobre">
              {"Sobre"}
            </a>
            <a href="#duvidas">
              {"Dúvidas"}
            </a>
          </nav>
          <a className="hv1" href={waHref} target="_blank" rel="noopener" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "10.5px", letterSpacing: ".22em", textTransform: "uppercase", padding: "13px 20px", border: "1px solid #111111", borderRadius: "999px", whiteSpace: "nowrap", transition: "background .3s, color .3s" }}>
            {"Agendar avaliação"}
          </a>
        </header>
        <section id="topo" data-screen-label="01 Hero" style={{ position: "relative", minHeight: "100vh", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", alignItems: "center", gap: "clamp(32px,5vw,80px)", padding: "clamp(120px,14vh,160px) clamp(20px,5vw,72px) clamp(60px,8vh,96px)", boxSizing: "border-box" }}>
          <div data-speed="-0.25" aria-hidden="true" style={{ position: "absolute", left: "-2vw", bottom: "2vh", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontWeight: "400", fontSize: "clamp(120px,22vw,340px)", lineHeight: ".8", color: "#E6DCCF", pointerEvents: "none", whiteSpace: "nowrap", zIndex: "0" }}>
            {"precisão"}
          </div>
          <div style={{ position: "relative", zIndex: "1", display: "flex", flexDirection: "column", gap: "28px", maxWidth: "640px" }}>
            <span data-reveal="0" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#8A6D3F" }}>
              {"Harmonização Orofacial · Belo Horizonte"}
            </span>
            {(headlineA) && (<>
              <h1 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(52px,7.4vw,112px)", lineHeight: ".95", letterSpacing: "-.02em", textWrap: "balance" }}>
                {"Menos não é falta. "}
                <em style={{ fontWeight: "500" }}>
                  {"É precisão."}
                </em>
              </h1>
            </>)}
            {(headlineB) && (<>
              <h1 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(48px,6.6vw,100px)", lineHeight: ".98", letterSpacing: "-.02em", textWrap: "balance" }}>
                {"Realçar o que já é seu, "}
                <em style={{ fontWeight: "500" }}>
                  {"sem perder a sua identidade."}
                </em>
              </h1>
            </>)}
            <p data-reveal="2" style={{ margin: "0", fontSize: "clamp(17px,1.35vw,20px)", lineHeight: "1.6", color: "#3B3530", maxWidth: "480px", textWrap: "pretty" }}>
              {"Harmonização facial com planejamento individual e o volume necessário para o "}
              <em>
                {"seu"}
              </em>
              {" rosto. O resultado que eu busco é aquele em que ninguém identifica o que foi feito — só percebe que você está "}
              <strong style={{ fontWeight: "500" }}>
                {"mais bonita"}
              </strong>
              {"."}
            </p>
            <div data-reveal="3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px" }}>
              <a className="hv2" href={waHref} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "14px", padding: "19px 30px", background: "#111111", color: "#F7F5F2", borderRadius: "999px", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", transition: "background .3s, transform .3s" }}>
                {"Agendar avaliação "}
                <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "16px", letterSpacing: "0" }}>
                  {"→"}
                </span>
              </a>
              <a href="#filosofia" style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "22px", borderBottom: "1px solid #C19A6B", paddingBottom: "2px" }}>
                {"conheça a minha filosofia"}
              </a>
            </div>
            <span data-reveal="4" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#6B6258" }}>
              {"Dra. Raphaela Morais · Cirurgiã-dentista · CRO 63940 · Especialista em HOF pela CPCD"}
            </span>
          </div>
          <div style={{ position: "relative", zIndex: "1", justifySelf: "center", width: "min(100%,520px)" }}>
            <div data-reveal="2" style={{ position: "relative", aspectRatio: "4/5", borderRadius: "260px 260px 4px 4px", overflow: "hidden", background: "#E6DCCF" }}>
              <div data-speed="0.12" style={{ position: "absolute", left: "0", right: "0", top: "-10%", height: "120%" }}>
                <ImageSlot id="hero-retrato" shape="rect" placeholder="Retrato profissional da Dra. Raphaela — fundo claro, luz natural" />
              </div>
            </div>
            <div data-speed="-0.18" style={{ position: "absolute", left: "-28px", bottom: "9%", background: "#F7F5F2", padding: "18px 22px", borderRadius: "2px", boxShadow: "0 24px 60px -30px rgba(17,17,17,.35)", display: "flex", flexDirection: "column", gap: "6px", maxWidth: "220px" }}>
              <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".28em", color: "#8A6D3F" }}>
                {"CONSULTÓRIO NOVO"}
              </span>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "21px", lineHeight: "1.15" }}>
                {"Inaugurado em abril de 2026, em Belo Horizonte."}
              </span>
            </div>
            <div aria-hidden="true" data-speed="0.3" style={{ position: "absolute", right: "-18px", top: "14%", width: "92px", height: "92px", border: "1px solid #B8975A", borderRadius: "50%" }} />
          </div>
        </section>
        <section id="filosofia" data-words="" data-screen-label="02 Filosofia" style={{ position: "relative", height: "240vh", background: "#F7F5F2" }}>
          <div style={{ position: "sticky", top: "0", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px", padding: "0 clamp(20px,7vw,120px)", boxSizing: "border-box" }}>
            <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#8A6D3F" }}>
              {"A minha filosofia"}
            </span>
            <p style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,4.6vw,76px)", lineHeight: "1.1", letterSpacing: "-.01em", maxWidth: "1200px", display: "flex", flexWrap: "wrap", columnGap: ".26em" }}>
              {(words).map((w: any, $index: number) => (<Fragment key={$index}>
                <span data-word="" style={{ color: "#D2C8BB", transition: "color .35s ease" }}>
                  {w}
                </span>
              </Fragment>))}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "48px", height: "1px", background: "#B8975A" }} />
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "22px", color: "#3B3530" }}>
                {"Dra. Raphaela Morais"}
              </span>
            </div>
          </div>
        </section>
        <section data-screen-label="03 Princípios" style={{ position: "relative", padding: "8vh clamp(20px,5vw,72px) 12vh", background: "#F7F5F2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", maxWidth: "1180px", margin: "0 auto 6vh" }}>
            <h2 data-reveal="0" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(40px,5vw,72px)", lineHeight: "1", letterSpacing: "-.015em", maxWidth: "640px" }}>
              {"Quatro princípios que guiam "}
              <em>
                {"cada"}
              </em>
              {" planejamento."}
            </h2>
            <p data-reveal="1" style={{ margin: "0", maxWidth: "340px", fontSize: "17px", lineHeight: "1.6", color: "#3B3530" }}>
              {"Antes de qualquer procedimento, existe uma conversa e uma análise do seu rosto. É aqui que tudo começa."}
            </p>
          </div>
          <div data-vstack="" style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "6vh" }}>
            <article data-vcard="" style={{ position: "sticky", top: "calc(14vh + 0px)", minHeight: "min(62vh,560px)", background: "#FFFDFB", border: "1px solid #E6DCCF", borderRadius: "6px", padding: "clamp(28px,4vw,64px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4vw,64px)", alignContent: "space-between", transformOrigin: "50% 0", boxShadow: "0 30px 80px -50px rgba(17,17,17,.4)" }}>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(80px,10vw,160px)", lineHeight: ".8", color: "#C19A6B" }}>
                {"01"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "end" }}>
                <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,3.6vw,56px)", lineHeight: "1.02" }}>
                  {"Menos não é falta, "}
                  <strong style={{ fontWeight: "600" }}>
                    {"é precisão."}
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#3B3530", maxWidth: "440px" }}>
                  {"Planejo com o volume necessário para o seu rosto — nem mais, nem menos. Menos excessos, mais estratégia."}
                </p>
              </div>
            </article>
            <article data-vcard="" style={{ position: "sticky", top: "calc(14vh + 22px)", minHeight: "min(62vh,560px)", background: "#E6DCCF", borderRadius: "6px", padding: "clamp(28px,4vw,64px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4vw,64px)", alignContent: "space-between", transformOrigin: "50% 0", boxShadow: "0 30px 80px -50px rgba(17,17,17,.4)" }}>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(80px,10vw,160px)", lineHeight: ".8", color: "#8A6D3F" }}>
                {"02"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "end" }}>
                <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,3.6vw,56px)", lineHeight: "1.02" }}>
                  {"Realçar, "}
                  <strong style={{ fontWeight: "600" }}>
                    {"não transformar."}
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#2A2520", maxWidth: "440px" }}>
                  {"O objetivo não é mudar o rosto, e sim valorizar o que já existe — com equilíbrio, proporção e respeito à sua anatomia."}
                </p>
              </div>
            </article>
            <article data-vcard="" style={{ position: "sticky", top: "calc(14vh + 44px)", minHeight: "min(62vh,560px)", background: "#111111", color: "#F7F5F2", borderRadius: "6px", padding: "clamp(28px,4vw,64px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4vw,64px)", alignContent: "space-between", transformOrigin: "50% 0", boxShadow: "0 30px 80px -50px rgba(17,17,17,.6)" }}>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(80px,10vw,160px)", lineHeight: ".8", color: "#C19A6B" }}>
                {"03"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "end" }}>
                <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,3.6vw,56px)", lineHeight: "1.02" }}>
                  {"Sem perder a "}
                  <strong style={{ fontWeight: "600" }}>
                    {"sua identidade."}
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#E6DCCF", maxWidth: "440px" }}>
                  {"A pergunta não deveria ser “o que ela fez?”, e sim: “como ela está mais bonita?”. Você continua sendo você."}
                </p>
              </div>
            </article>
            <article data-vcard="" style={{ position: "sticky", top: "calc(14vh + 66px)", minHeight: "min(62vh,560px)", background: "#C19A6B", borderRadius: "6px", padding: "clamp(28px,4vw,64px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4vw,64px)", alignContent: "space-between", transformOrigin: "50% 0", boxShadow: "0 30px 80px -50px rgba(17,17,17,.4)" }}>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(80px,10vw,160px)", lineHeight: ".8", color: "#111111" }}>
                {"04"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "end" }}>
                <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,3.6vw,56px)", lineHeight: "1.02" }}>
                  {"Primeiro, "}
                  <strong style={{ fontWeight: "600" }}>
                    {"no meu próprio rosto."}
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#111111", maxWidth: "440px" }}>
                  {"Cada procedimento que realizo em mim segue o mesmo princípio que aplico nas minhas pacientes."}
                </p>
                {(showPending) && (<>
                  <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".18em", padding: "6px 10px", border: "1px dashed #111111", borderRadius: "3px" }}>
                    {"[VALIDAR COM A CLIENTE]"}
                  </span>
                </>)}
              </div>
            </article>
          </div>
        </section>
        <section id="procedimentos" data-hstack="" data-screen-label="04 Procedimentos" style={{ position: "relative", height: "640vh", background: "#EFE8DE" }}>
          <div style={{ position: "sticky", top: "0", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", boxSizing: "border-box", padding: "clamp(96px,13vh,120px) 0 clamp(24px,4vh,40px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px", padding: "0 clamp(20px,5vw,72px)", marginBottom: "clamp(20px,3.5vh,36px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#8A6D3F" }}>
                  {"Procedimentos"}
                </span>
                <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(34px,4.2vw,62px)", lineHeight: "1", letterSpacing: "-.015em" }}>
                  {"Cada rosto pede "}
                  <em>
                    {"um"}
                  </em>
                  {" planejamento."}
                </h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "18px", minWidth: "200px" }}>
                <span data-hcount="" style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "28px", fontVariantNumeric: "tabular-nums" }}>
                  {"01"}
                </span>
                <span style={{ position: "relative", flex: "1", height: "1px", background: "#D2C8BB", minWidth: "120px" }}>
                  <span data-hbar="" style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "0", background: "#111111" }} />
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "28px", color: "#6B6258" }}>
                  {"07"}
                </span>
              </div>
            </div>
            <div style={{ position: "relative", flex: "1", minHeight: "0" }}>
              {(procs).map((p: any, $index: number) => (<Fragment key={$index}>
                <article data-hcard="" style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "min(1080px,90vw)", background: `${p.bg}`, color: `${p.fg}`, borderRadius: "6px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", transformOrigin: "0 50%", boxShadow: "-30px 0 80px -40px rgba(17,17,17,.35)", willChange: "transform" }}>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px", padding: "clamp(24px,3.6vw,56px)", minHeight: "0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                      <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "10.5px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".8" }}>
                        {p.tag}
                      </span>
                      <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(40px,4vw,64px)", lineHeight: ".8", color: `${p.num}` }}>
                        {p.n}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "500", fontSize: "clamp(34px,3.8vw,58px)", lineHeight: "1", letterSpacing: "-.01em" }}>
                        {p.title}
                      </h3>
                      <p style={{ margin: "0", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: "1.6", maxWidth: "440px", textWrap: "pretty" }}>
                        {p.text}
                      </p>
                      <p style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(19px,1.5vw,23px)", lineHeight: "1.3", color: `${p.num}` }}>
                        {p.note}
                      </p>
                    </div>
                  </div>
                  <div style={{ position: "relative", minHeight: "180px", background: `${p.img}` }}>
                    <ImageSlot id={`proc-${$index}`} shape="rect" placeholder={p.ph} />
                  </div>
                </article>
              </Fragment>))}
            </div>
          </div>
        </section>
        <section aria-hidden="true" data-screen-label="05 Palavras" style={{ position: "relative", padding: "9vh 0", background: "#F7F5F2", overflow: "hidden", borderBottom: "1px solid #E6DCCF" }}>
          <div data-marquee="" style={{ display: "flex", gap: ".5em", whiteSpace: "nowrap", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(56px,8vw,128px)", lineHeight: "1", willChange: "transform" }}>
            <span>
              {"naturalidade"}
            </span>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <em>
              {"harmonia"}
            </em>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <span>
              {"equilíbrio"}
            </span>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <em>
              {"planejamento"}
            </em>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <span>
              {"proporção"}
            </span>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <em>
              {"sutileza"}
            </em>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <span>
              {"identidade"}
            </span>
            <span style={{ color: "#B8975A" }}>
              {"·"}
            </span>
            <em>
              {"detalhes"}
            </em>
          </div>
        </section>
        <section id="consultorio" data-screen-label="06 Consultório" style={{ position: "relative", padding: "clamp(96px,14vh,160px) clamp(20px,5vw,72px)", background: "#F7F5F2" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(48px,6vw,96px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "480px" }}>
              <span data-reveal="0" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#8A6D3F" }}>
                {"O consultório"}
              </span>
              <h2 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(44px,5.4vw,84px)", lineHeight: ".98", letterSpacing: "-.02em" }}>
                {"Um sonho que "}
                <em>
                  {"ganhou forma."}
                </em>
              </h2>
              <p data-reveal="2" style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "#3B3530", textWrap: "pretty" }}>
                {"Em abril de 2026 inaugurei o meu consultório em Belo Horizonte: um espaço claro, com janelões e vista da cidade, marcenaria em madeira clara e poltronas bouclé. Pensei cada detalhe para que você se sinta acolhida, sem pressa, do primeiro café ao planejamento."}
              </p>
              <div data-reveal="3" style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "22px", borderTop: "1px solid #E6DCCF" }}>
                <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "10px", letterSpacing: ".28em", color: "#6B6258" }}>
                  {"ENDEREÇO"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Belo Horizonte · MG"}
                </span>
                {(showPending) && (<>
                  <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".18em", padding: "6px 10px", border: "1px dashed #8A6D3F", color: "#8A6D3F", borderRadius: "3px" }}>
                    {"[PENDENTE] endereço exato · espaço compartilhado?"}
                  </span>
                </>)}
              </div>
            </div>
            <div style={{ position: "relative", height: "clamp(520px,78vh,760px)" }}>
              <div style={{ position: "absolute", right: "0", top: "0", width: "68%", height: "70%", borderRadius: "4px", overflow: "hidden", background: "#E6DCCF" }}>
                <div data-speed="0.1" style={{ position: "absolute", left: "0", right: "0", top: "-12%", height: "124%" }}>
                  <ImageSlot id="consultorio-1" shape="rect" placeholder="Consultório — janelões com vista da cidade" />
                </div>
              </div>
              <div data-speed="-0.14" style={{ position: "absolute", left: "0", bottom: "4%", width: "48%", height: "50%", borderRadius: "200px 200px 4px 4px", overflow: "hidden", background: "#E6DCCF", boxShadow: "0 30px 70px -40px rgba(17,17,17,.45)", border: "8px solid #F7F5F2" }}>
                <ImageSlot id="consultorio-2" shape="rect" placeholder="Poltronas bouclé + espelho dourado" />
              </div>
              <div data-speed="-0.3" style={{ position: "absolute", right: "6%", bottom: "0", width: "30%", height: "28%", borderRadius: "4px", overflow: "hidden", background: "#E6DCCF", border: "8px solid #F7F5F2" }}>
                <ImageSlot id="consultorio-3" shape="rect" placeholder="Detalhe da marcenaria freijó" />
              </div>
            </div>
          </div>
        </section>
        <section id="sobre" data-screen-label="07 Sobre" style={{ position: "relative", padding: "clamp(96px,14vh,160px) clamp(20px,5vw,72px)", background: "#E6DCCF", overflow: "hidden" }}>
          <div data-speed="-0.2" aria-hidden="true" style={{ position: "absolute", right: "-4vw", top: "6vh", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(120px,18vw,280px)", lineHeight: ".8", color: "#DCCFBE", whiteSpace: "nowrap", pointerEvents: "none" }}>
            {"Raphaela"}
          </div>
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(48px,6vw,96px)", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", maxWidth: "480px", width: "100%", justifySelf: "center", borderRadius: "4px", overflow: "hidden", background: "#DCCFBE" }}>
              <div data-speed="0.1" style={{ position: "absolute", left: "0", right: "0", top: "-12%", height: "124%" }}>
                <ImageSlot id="sobre-retrato" shape="rect" placeholder="Retrato com o espelho redondo dourado" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "560px" }}>
              <span data-reveal="0" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#6E5530" }}>
                {"Sobre mim"}
              </span>
              <h2 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(44px,5vw,76px)", lineHeight: ".98", letterSpacing: "-.02em" }}>
                {"Oi, eu sou a "}
                <em>
                  {"Raphaela."}
                </em>
              </h2>
              <p data-reveal="2" style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#2A2520", textWrap: "pretty" }}>
                {"Sou cirurgiã-dentista e especialista em Harmonização Orofacial pela CPCD. Acredito que beleza não é sobre mudar o rosto — é sobre "}
                <em>
                  {"cuidar, prevenir e valorizar"}
                </em>
                {" o que já é seu."}
              </p>
              <p data-reveal="3" style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#2A2520", textWrap: "pretty" }}>
                {"Por isso sou transparente em cada etapa: explico o que cada ponto de aplicação faz, quanto produto faz sentido para você e por quê. Sem excessos, com estratégia."}
              </p>
              <div data-reveal="4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "18px", paddingTop: "24px", borderTop: "1px solid #C9B9A4" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".26em", color: "#6E5530" }}>
                    {"FORMAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "21px", lineHeight: "1.2" }}>
                    {"Cirurgiã-dentista"}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".26em", color: "#6E5530" }}>
                    {"ESPECIALIZAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "21px", lineHeight: "1.2" }}>
                    {"HOF · CPCD"}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".26em", color: "#6E5530" }}>
                    {"REGISTRO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "21px", lineHeight: "1.2" }}>
                    {"CRO 63940"}
                  </span>
                </div>
              </div>
              {(showPending) && (<>
                <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "9.5px", letterSpacing: ".18em", padding: "6px 10px", border: "1px dashed #6E5530", color: "#6E5530", borderRadius: "3px" }}>
                  {"[PENDENTE] ano de formatura / início em HOF · confirmar CRO-MG"}
                </span>
              </>)}
            </div>
          </div>
        </section>
        <section id="duvidas" data-screen-label="08 Dúvidas" style={{ position: "relative", padding: "clamp(96px,14vh,160px) clamp(20px,5vw,72px)", background: "#F7F5F2" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "sticky", top: "120px" }}>
              <span data-reveal="0" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#8A6D3F" }}>
                {"Dúvidas frequentes"}
              </span>
              <h2 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(40px,4.6vw,68px)", lineHeight: "1", letterSpacing: "-.015em" }}>
                {"As perguntas que "}
                <em>
                  {"mais"}
                </em>
                {" recebo."}
              </h2>
              <p data-reveal="2" style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3B3530" }}>
                {"Ficou alguma outra? Me chama que eu te explico."}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #D2C8BB" }}>
              {(faqs).map((f: any, $index: number) => (<Fragment key={$index}>
                <div style={{ borderBottom: "1px solid #D2C8BB" }}>
                  <button className="hv3" onClick={f.toggle} style={{ all: "unset", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", padding: "26px 0", fontFamily: "var(--font-cormorant),serif", fontWeight: "500", fontSize: "clamp(22px,2vw,28px)", lineHeight: "1.2" }}>
                    <span>
                      {f.q}
                    </span>
                    <span style={{ flex: "none", width: "36px", height: "36px", border: "1px solid #C19A6B", borderRadius: "50%", display: "grid", placeItems: "center", fontFamily: "var(--font-jost),sans-serif", fontWeight: "300", fontSize: "20px", transition: "transform .4s ease", transform: `${f.rot}` }}>
                      {"+"}
                    </span>
                  </button>
                  <div style={{ display: "grid", gridTemplateRows: `${f.rows}`, transition: "grid-template-rows .5s cubic-bezier(.2,.7,.2,1)" }}>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ margin: "0", padding: "0 56px 28px 0", fontSize: "17px", lineHeight: "1.7", color: "#3B3530", textWrap: "pretty" }}>
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>))}
            </div>
          </div>
        </section>
        <section data-screen-label="09 CTA final" style={{ position: "relative", padding: "clamp(110px,18vh,200px) clamp(20px,5vw,72px)", background: "#111111", color: "#F7F5F2", overflow: "hidden", textAlign: "center" }}>
          <div data-speed="-0.15" aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "min(80vw,760px)", aspectRatio: "1", margin: "calc(min(80vw,760px) / -2) 0 0 calc(min(80vw,760px) / -2)", border: "1px solid #3A332C", borderRadius: "50%", pointerEvents: "none" }} />
          <div data-speed="0.1" aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "min(56vw,520px)", aspectRatio: "1", margin: "calc(min(56vw,520px) / -2) 0 0 calc(min(56vw,520px) / -2)", border: "1px solid #5A4A32", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <span data-reveal="0" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".34em", textTransform: "uppercase", color: "#C19A6B" }}>
              {"Avaliação facial personalizada"}
            </span>
            <h2 data-reveal="1" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "400", fontSize: "clamp(48px,7vw,108px)", lineHeight: ".96", letterSpacing: "-.02em", textWrap: "balance" }}>
              {"Vamos conversar sobre "}
              <em>
                {"o seu"}
              </em>
              {" rosto?"}
            </h2>
            <p data-reveal="2" style={{ margin: "0", maxWidth: "540px", fontSize: "18px", lineHeight: "1.65", color: "#D8CFC4" }}>
              {"A avaliação é o primeiro passo: entendo o que você deseja, analiso a sua face e monto um planejamento só seu. Me chama que eu te explico 🤍"}
            </p>
            <a className="hv4" data-reveal="3" href={waHref} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "14px", padding: "21px 34px", background: "#F7F5F2", color: "#111111", borderRadius: "999px", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", transition: "background .3s" }}>
              {"Chamar no WhatsApp "}
              <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "16px", letterSpacing: "0" }}>
                {"→"}
              </span>
            </a>
            <span data-reveal="4" style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "19px", color: "#B3A89B" }}>
              {"Investimento sob consulta, definido após a avaliação."}
            </span>
          </div>
        </section>
        <footer data-screen-label="10 Rodapé" style={{ padding: "56px clamp(20px,5vw,72px) 40px", background: "#111111", color: "#B3A89B", borderTop: "1px solid #2A2520" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost),sans-serif", fontWeight: "300", fontSize: "18px", letterSpacing: ".34em", color: "#F7F5F2" }}>
                {"RAPHAELA MORAIS"}
              </span>
              <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: ".24em" }}>
                {"HARMONIZAÇÃO OROFACIAL"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", lineHeight: "1.5" }}>
              <span>
                {"Responsável técnica: Dra. Raphaela Souza Morais"}
              </span>
              <span>
                {"Cirurgiã-dentista · CRO 63940 · Especialista em HOF (CPCD)"}
              </span>
              <span>
                {"Belo Horizonte · MG "}
                {(showPending) && (<>
                  <span style={{ color: "#C19A6B" }}>
                    {"[PENDENTE: endereço]"}
                  </span>
                </>)}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
              <a href="https://instagram.com/raphaelasmorais" target="_blank" rel="noopener" style={{ color: "#F7F5F2" }}>
                {"Instagram · @raphaelasmorais"}
              </a>
              <a href={waHref} target="_blank" rel="noopener" style={{ color: "#F7F5F2" }}>
                {"WhatsApp · agendar avaliação"}
              </a>
            </div>
          </div>
          <div style={{ maxWidth: "1240px", margin: "40px auto 0", paddingTop: "22px", borderTop: "1px solid #2A2520", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "500", fontSize: "9.5px", letterSpacing: ".22em", color: "#8C8276" }}>
            <span>
              {"© 2026 DRA. RAPHAELA MORAIS"}
            </span>
            <span>
              {"POSICIONAMENTO PROFISSIONAL · GR ONE"}
            </span>
          </div>
        </footer>
        <a className="hv5" data-float="" href={waHref} target="_blank" rel="noopener" style={{ position: "fixed", right: "clamp(16px,3vw,32px)", bottom: "clamp(16px,3vw,32px)", zIndex: "60", display: "flex", alignItems: "center", gap: "12px", padding: "15px 22px 15px 16px", background: "#111111", color: "#F7F5F2", borderRadius: "999px", boxShadow: "0 18px 40px -18px rgba(17,17,17,.6)", fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "600", fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", opacity: "0", pointerEvents: "none", transform: "translateY(16px)", transition: "opacity .4s ease, transform .4s ease, background .3s" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C9737A" }} />
          {"Agendar avaliação "}
        </a>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Camera,
  Compass,
  Facebook,
  Instagram,
  Leaf,
  Mail,
  Map,
  MessageCircle,
  Mountain,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import styles from "./page.module.css";

const navItems = [
  { label: "Sobre", href: "sobre" },
  { label: "Destinos", href: "destinos" },
  { label: "Pacotes", href: "pacotes" },
  { label: "FAQ", href: "faq" },
  { label: "Contato", href: "contato" },
];

const differentiators = [
  {
    title: "Aventura com Conforto",
    description:
      "Vans equipadas e prontas para enfrentar estradas de terra com comodidade e segurança.",
    icon: VanIcon,
  },
  {
    title: "Roteiros Exclusivos",
    description:
      "Cada destino é estudado para oferecer trilhas, cachoeiras secretas e vivências autênticas.",
    icon: Map,
  },
  {
    title: "Guias Especializados",
    description:
      "Equipe certificada em ecoturismo, primeiros socorros e profundo conhecimento regional.",
    icon: Compass,
  },
  {
    title: "Segurança e Sustentabilidade",
    description:
      "Protocolos rígidos, seguro viagem e compromisso de impacto zero na natureza.",
    icon: ShieldCheck,
  },
  {
    title: "Grupos Intimistas",
    description:
      "Turmas de 8 a 12 pessoas para conexões genuínas e experiências personalizadas.",
    icon: Users,
  },
  {
    title: "Fotografia de Aventura",
    description:
      "Registros profissionais incluídos em pacotes selecionados para eternizar a jornada.",
    icon: Camera,
  },
];

const destinations = [
  {
    name: "Serra da Mantiqueira",
    description: "Trilhas de altitude, mirantes infinitos e cachoeiras cristalinas.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chapada dos Veadeiros",
    description: "Cânions, águas termais e formações rochosas únicas.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Litoral Norte SP",
    description: "Praias selvagens, Mata Atlântica e comunidades caiçaras.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Serra da Canastra",
    description: "Nascente do São Francisco, fauna abundante e paredões dramáticos.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vale do Capão",
    description: "Vilarejos acolhedores, trekings desafiadores e cachoeiras lendárias.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
];

const experiences = [
  {
    name: "Aventura de Fim de Semana",
    duration: "3 dias / 2 noites",
    description: "Escapada intensa para recarregar energias e mergulhar na natureza.",
    activities: ["Trilhas guiadas", "Banho de cachoeira", "Café da manhã regional"],
    price: "A partir de R$1.590",
  },
  {
    name: "Expedição 5 Dias",
    duration: "5 dias / 4 noites",
    description: "Roteiro completo com vivências culturais e gastronomia local.",
    activities: ["Camping boutique", "Workshop de fotografia", "Observação de estrelas"],
    price: "A partir de R$2.980",
    tag: "Mais procurado",
  },
  {
    name: "Especial Cachoeiras",
    duration: "4 dias / 3 noites",
    description: "Coleção das quedas d'água mais impressionantes da região escolhida.",
    activities: ["Rapel leve", "Picnic na mata", "Sessão de meditação"],
    price: "A partir de R$2.350",
  },
];

const testimonials = [
  {
    quote:
      "A experiência com a Vanamata superou todas as expectativas! A cachoeira que visitamos era de tirar o fôlego.",
    author: "Ana Silva",
  },
  {
    quote:
      "Segurança, aventura e natureza em doses perfeitas. Já estou planejando a próxima viagem!",
    author: "Carlos Mendes",
  },
  {
    quote:
      "Os guias conhecem cada detalhe dos lugares. Me senti em casa na mata.",
    author: "Juliana Costa",
  },
  {
    quote:
      "Infraestrutura impecável e respeito total ao meio ambiente. Recomendo de olhos fechados.",
    author: "Fernanda Oliveira",
  },
];

const faqs = [
  {
    question: "Preciso ter experiência prévia em trilhas?",
    answer:
      "Não. Nossos roteiros oferecem níveis variados e enviamos um guia detalhado com preparo físico e equipamentos sugeridos.",
  },
  {
    question: "O que está incluso nos pacotes?",
    answer:
      "Transporte em van, hospedagem selecionada, alimentação principal, guias, seguro viagem e equipamentos básicos.",
  },
  {
    question: "Como funcionam os cancelamentos?",
    answer:
      "Oferecemos reembolso integral até 15 dias antes da viagem ou crédito total para uma nova data.",
  },
  {
    question: "Vocês cuidam de alimentação para restrições específicas?",
    answer:
      "Sim. Informando com antecedência conseguimos ajustar cardápios para dietas vegetarianas, veganas ou restrições alimentares.",
  },
  {
    question: "Qual o tamanho dos grupos?",
    answer:
      "Mantemos expedições intimistas com no máximo 12 viajantes, garantindo atenção personalizada.",
  },
];

const heroStats = [
  { label: "Expedições guiadas", value: "+120" },
  { label: "Destinos preservados", value: "25" },
  { label: "Satisfação", value: "4.9/5" },
];

const contactDetails = [
  {
    label: "Telefone",
    value: "+55 (11) 99876-1234",
    icon: Phone,
    href: "tel:+5511998761234",
  },
  {
    label: "WhatsApp",
    value: "+55 (11) 95555-9876",
    icon: MessageCircle,
    href: "https://wa.me/5511955559876",
  },
  {
    label: "E-mail",
    value: "contato@vanamata.com",
    icon: Mail,
    href: "mailto:contato@vanamata.com",
  },
];

function VanIcon() {
  return <Mountain size={28} color="var(--color-forest)" strokeWidth={1.75} />;
}

export default function Home() {
  const [isNavSolid, setIsNavSolid] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", offset: 80, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("Contato Vanamata", payload);
    event.currentTarget.reset();
  };

  return (
    <div className={styles.page}>
      <header className={`${styles.header} ${isNavSolid ? styles.headerSolid : ""}`}>
        <div className={styles.logoGroup}>
          <div className={styles.logoIcon}>VM</div>
          <div className={styles.logoText}>
            <span>Vanamata</span>
            <span>van na mata</span>
          </div>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={`#${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.primaryCta} href="#contato">
          Reserve sua Aventura
        </a>
      </header>

      <main>
        <section className={styles.hero} id="hero">
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.eyebrow}>
              <Leaf size={18} /> VAN NA MATA
            </p>
            <h1>Viva a aventura: montanhas, cachoeiras e natureza selvagem.</h1>
            <p>
              Conectamos você aos destinos mais incríveis do Brasil em vans confortáveis, com
              roteiros exclusivos, equipe especializada e impacto positivo na natureza.
            </p>
            <div className={styles.heroButtons}>
              <motion.a
                href="#destinos"
                className={styles.primaryCtaLarge}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Explorar Destinos
              </motion.a>
              <motion.a
                href="#pacotes"
                className={styles.outlineButton}
                whileHover={{ y: -3 }}
              >
                Ver Pacotes
              </motion.a>
            </div>
            <div className={styles.stats}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className={styles.heroMedia}>
            <div className={styles.heroBadge}>
              <strong>Roteiros exclusivos Vanamata</strong>
              <p>Expedições guiadas com conforto, segurança e respeito à natureza.</p>
            </div>
          </div>
        </section>

        <section id="sobre" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <p className={styles.eyebrow}>Sobre a Vanamata</p>
            <h2 className={styles.sectionTitle}>Viagens transformadoras pelo Brasil selvagem.</h2>
            <p className={styles.sectionDescription}>
              A Vanamata nasceu para resgatar a conexão com a natureza. Operamos roteiros autorais
              em montanhas, cachoeiras e reservas, com vans equipadas, protocolos de segurança e
              experiências memoráveis para grupos reduzidos.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className={styles.differentialCard}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <item.icon />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="destinos" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <p className={styles.eyebrow}>Destinos Populares</p>
            <h2 className={styles.sectionTitle}>Natureza exuberante em cada rota.</h2>
            <p className={styles.sectionDescription}>
              Montanhas, chapadas, litorais e vales preservados esperando por você. Selecionamos
              paisagens cinematográficas e experiências culturais imersivas.
            </p>
          </div>
          <div className={styles.destinationsGrid}>
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className={styles.destinationCard}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className={styles.destinationImage}>
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div className={styles.destinationContent}>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <span>Ver pacotes →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pacotes" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <p className={styles.eyebrow}>Pacotes & Experiências</p>
            <h2 className={styles.sectionTitle}>Escolha a aventura ideal para o seu momento.</h2>
            <p className={styles.sectionDescription}>
              Fim de semana, expedições longas ou imersões temáticas. Personalize com atividades
              extras e registre lembranças com nossa equipe de fotografia.
            </p>
          </div>
          <div className={styles.packagesGrid}>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.name}
                className={styles.packageCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ translateY: -6 }}
              >
                {experience.tag ? <span className={styles.packageTag}>{experience.tag}</span> : null}
                <h3>{experience.name}</h3>
                <p>{experience.duration}</p>
                <p>{experience.description}</p>
                <ul className={styles.packageActivities}>
                  {experience.activities.map((activity) => (
                    <li key={activity}>• {activity}</li>
                  ))}
                </ul>
                <span className={styles.packagePrice}>{experience.price}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.testimonials}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Depoimentos Reais</p>
            <h2 className={styles.sectionTitle}>Histórias que nascem na estrada.</h2>
          </div>
          <div className={styles.testimonialRow}>
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1 }}
              >
                <p>“{testimonial.quote}”</p>
                <footer>— {testimonial.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
          </div>
          <div className={styles.faq}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem} data-aos="fade-up">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contato" className={styles.section}>
          <div className={styles.contactSection}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Contato & Newsletter</p>
              <h2 className={styles.sectionTitle}>
                Pronto para sua próxima aventura? Fale com a Vanamata.
              </h2>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactCard}>
                <h3>Fale com a equipe</h3>
                <p>
                  Tire dúvidas sobre roteiros, disponibilidade e personalizações. Respondemos em
                  até 24 horas úteis.
                </p>
                <div className={styles.contactInfo}>
                  {contactDetails.map((detail) => (
                    <a key={detail.label} href={detail.href}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </a>
                  ))}
                </div>
              </div>

              <form className={styles.form} onSubmit={handleContactSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    className={styles.input}
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    required
                  />
                  <input
                    className={styles.input}
                    type="tel"
                    name="telefone"
                    placeholder="Telefone / WhatsApp"
                  />
                </div>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
                <select
                  className={styles.input}
                  name="interesse"
                  defaultValue=""
                  aria-label="Selecione o tipo de experiência"
                >
                  <option value="" disabled>
                    Qual experiência você busca?
                  </option>
                  <option value="fim-de-semana">Aventura de fim de semana</option>
                  <option value="expedicao-5-dias">Expedição 5 dias</option>
                  <option value="especial-cachoeiras">Especial cachoeiras</option>
                  <option value="personalizado">Roteiro personalizado</option>
                </select>
                <textarea
                  className={styles.textarea}
                  name="mensagem"
                  placeholder="Conte-nos seus interesses, datas e expectativas."
                />
                <button type="submit" className={styles.submitButton}>
                  Quero saber mais
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div>
            <div className={styles.logoGroup}>
              <div className={styles.logoIcon}>VM</div>
              <div className={styles.logoText}>
                <span>Vanamata</span>
                <span>van na mata</span>
              </div>
            </div>
            <p>
              Expedições em vans equipadas para conectar pessoas à natureza com respeito e
              sustentabilidade.
            </p>
          </div>
          <div>
            <strong>Links úteis</strong>
            <div className={styles.contactInfo}>
              {navItems.map((item) => (
                <a key={item.href} href={`#${item.href}`}>
                  {item.label}
                </a>
              ))}
              <a href="#">Política de Privacidade</a>
            </div>
          </div>
          <div>
            <strong>Redes sociais</strong>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://wa.me/5511955559876" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2025 Vanamata - Van na Mata. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

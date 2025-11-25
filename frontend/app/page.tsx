"use client";

import {
	type FormEvent,
	useEffect,
	useMemo,
	useState,
} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	ArrowUpRight,
	Bus,
	Camera,
	ChevronDown,
	Compass,
	Instagram,
	Leaf,
	MapIcon,
	PhoneCall,
	Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Differential = {
	title: string;
	description: string;
	icon: LucideIcon;
};

type Destination = {
	name: string;
	description: string;
	image: string;
	tag: string;
};

type GalleryPhoto = {
	image: string;
	category: string;
	location: string;
	label: string;
};

type TravelPackage = {
	title: string;
	duration: string;
	description: string;
	price: string;
	perks: string[];
	highlight?: string;
	popular?: boolean;
};

type Testimonial = {
	name: string;
	location: string;
	trip: string;
	text: string;
	rating: number;
	avatar: string;
};

type FAQ = {
	question: string;
	answer: string;
};

const buildUnsplashSrc = (path: string, width = 1600) =>
	`https://images.unsplash.com/${path}?auto=format&fit=crop&w=${width}&q=80&ixlib=rb-4.0.3`;

const NAV_LINKS = [
	{ label: "Destinos", href: "#destinos" },
	{ label: "Pacotes", href: "#pacotes" },
	{ label: "Galeria", href: "#galeria" },
	{ label: "Contato", href: "#contato" },
];

const HERO_STATS = [
	{ label: "+500 aventureiros", detail: "desde 2018" },
	{ label: "15 destinos", detail: "roteiros autorais" },
	{ label: "98% satisfação", detail: "NPS 76" },
];

const DIFFERENTIALS: Differential[] = [
	{
		title: "Aventura + Conforto",
		description:
			"Frotas premium para até 12 pessoas, com bancos reclináveis, climatização e amenities.",
		icon: Bus,
	},
	{
		title: "Roteiros Exclusivos",
		description:
			"Guias especialistas, gastronomia local e experiências tailor-made em cada destino.",
		icon: MapIcon,
	},
	{
		title: "Turismo Sustentável",
		description:
			"Compensação total de carbono, parcerias com comunidades e impacto positivo.",
		icon: Leaf,
	},
];

const HERO_IMAGE = buildUnsplashSrc("photo-1500534314214-2c67e6c77c19", 2000);

const DESTINATIONS: Destination[] = [
	{
		name: "Serra da Mantiqueira",
		description: "Trilhas suspensas, cafés coloniais e mirantes acima das nuvens.",
		tag: "Montanhas",
		image: buildUnsplashSrc("photo-1500530855697-b586d89ba3ee"),
	},
	{
		name: "Chapada dos Veadeiros",
		description: "Cânions cristalinos, cachoeiras cinematográficas e energia única.",
		tag: "Cachoeiras",
		image: buildUnsplashSrc("photo-1523419409543-0c1df022bddb"),
	},
	{
		name: "Litoral Norte SP",
		description: "Expedições costeiras com remadas ao nascer do sol e sunset em paradores.",
		tag: "Praias",
		image: buildUnsplashSrc("photo-1507525428034-b723cf961d3e"),
	},
	{
		name: "Serra da Canastra",
		description: "Safari fotográfico, queijo premiado e cachoeiras colossais.",
		tag: "Cânions",
		image: buildUnsplashSrc("photo-1500534314209-a25ddb2bd429"),
	},
	{
		name: "Chapada Diamantina",
		description: "Cavernas azuis, voos de drone e trekking cinematográfico.",
		tag: "Exploração",
		image: buildUnsplashSrc("photo-1501785888041-af3ef285b470"),
	},
	{
		name: "Itatiaia",
		description: "Montanhismo técnico, campo base gourmet e noite sob as estrelas.",
		tag: "Alta Montanha",
		image: buildUnsplashSrc("photo-1470770841072-f978cf4d019e"),
	},
];

const GALLERY_CATEGORIES = ["Todos", "Cachoeiras", "Trilhas", "Montanhas", "Momentos"];

const GALLERY: GalleryPhoto[] = [
	{
		image: buildUnsplashSrc("photo-1441974231531-c6227db76b6e", 900),
		category: "Montanhas",
		location: "Serra da Mantiqueira",
		label: "Sunrise Camp",
	},
	{
		image: buildUnsplashSrc("photo-1500534623283-312aade485b7", 900),
		category: "Momentos",
		location: "Chapada dos Veadeiros",
		label: "Grupo Julho/24",
	},
	{
		image: buildUnsplashSrc("photo-1431794062232-2a99a5431c6c", 900),
		category: "Cachoeiras",
		location: "Chapada Diamantina",
		label: "Poço Encantado",
	},
	{
		image: buildUnsplashSrc("photo-1437382944886-45a9f73d4158", 900),
		category: "Trilhas",
		location: "Itatiaia",
		label: "Agulhas Negras",
	},
	{
		image: buildUnsplashSrc("photo-1506744038136-46273834b3fb", 900),
		category: "Montanhas",
		location: "Canastra",
		label: "Golden Hour",
	},
	{
		image: buildUnsplashSrc("photo-1487730116645-74489c95b41b", 900),
		category: "Momentos",
		location: "Litoral Norte",
		label: "Churrasco na Praia",
	},
	{
		image: buildUnsplashSrc("photo-1482192597420-4817fdd7e8b0", 900),
		category: "Trilhas",
		location: "Chapada dos Veadeiros",
		label: "Travessia Lunar",
	},
	{
		image: buildUnsplashSrc("photo-1502082553048-f009c37129b9", 900),
		category: "Cachoeiras",
		location: "Serra do Cipó",
		label: "Banho de Rio",
	},
	{
		image: buildUnsplashSrc("photo-1470246973918-29a93221c455", 900),
		category: "Momentos",
		location: "Mantiqueira",
		label: "Mesa Posta",
	},
	{
		image: buildUnsplashSrc("photo-1431324155629-1a6deb1dec8d", 900),
		category: "Montanhas",
		location: "Patagônia Brasileira",
		label: "Trail Run",
	},
	{
		image: buildUnsplashSrc("photo-1465156799763-2c087c332922", 900),
		category: "Trilhas",
		location: "Canastra",
		label: "Pedra Bonita",
	},
	{
		image: buildUnsplashSrc("photo-1470770903676-69b98201ea1c", 900),
		category: "Cachoeiras",
		location: "Chapada Diamantina",
		label: "Queda do Sossego",
	},
];

const PACKAGES: TravelPackage[] = [
	{
		title: "Fim de Semana",
		duration: "2 dias | Popular",
		description: "Escapada express com cachoeira, trilha leve e piquenique gourmet.",
		price: "A partir de R$ 650/pessoa",
		perks: ["Hospedagem boutique", "Transfer premium", "Guia Vanamata"],
		popular: true,
	},
	{
		title: "Expedição Completa",
		duration: "5 dias | Imersão",
		description: "Roteiro multidestino com camping estruturado, astro tour e yoga sunrise.",
		price: "A partir de R$ 2.200/pessoa",
		perks: [
			"Alimentação completa",
			"Workshops de campo",
			"Seguro aventura",
		],
		highlight: "Imersão premium",
	},
	{
		title: "Especial Aventura",
		duration: "3 dias | Performance",
		description: "Trilhas de alta intensidade, escalada guiada e fisioterapia on trail.",
		price: "A partir de R$ 1.350/pessoa",
		perks: [
			"Equipamentos inclusos",
			"Registro fotográfico",
			"Sessão recovery",
		],
	},
];

const TESTIMONIALS: Testimonial[] = [
	{
		name: "Carolina Paiva",
		location: "São Paulo",
		trip: "Chapada dos Veadeiros",
		text: "Experiência impecável! Gastronomia, guias e logística em outro nível.",
		rating: 5,
		avatar: buildUnsplashSrc("photo-1502685104226-ee32379fefbe", 400),
	},
	{
		name: "Bruno Lage",
		location: "Rio de Janeiro",
		trip: "Serra da Mantiqueira",
		text: "Sensação de exclusividade total. Grupo reduzido e atenção aos detalhes.",
		rating: 5,
		avatar: buildUnsplashSrc("photo-1544723795-3fb6469f5b39", 400),
	},
	{
		name: "Luiza Monte",
		location: "Belo Horizonte",
		trip: "Serra da Canastra",
		text: "Turismo sustentável real. Parcerias locais e zero impacto perceptível.",
		rating: 5,
		avatar: buildUnsplashSrc("photo-1544005313-94ddf0286df2", 400),
	},
	{
		name: "Diego Neri",
		location: "Curitiba",
		trip: "Chapada Diamantina",
		text: "Equipe carismática e preparada. Segurança o tempo inteiro.",
		rating: 5,
		avatar: buildUnsplashSrc("photo-1506794778202-cad84cf45f1d", 400),
	},
	{
		name: "Patrícia Luz",
		location: "Brasília",
		trip: "Itatiaia",
		text: "Carro-chefe para quem ama montanha. Estrutura impecável e conforto.",
		rating: 5,
		avatar: buildUnsplashSrc("photo-1544723795-432537f5d6b4", 400),
	},
];

const FAQS: FAQ[] = [
	{
		question: "O que está incluído nos pacotes?",
		answer:
			"Incluímos transporte premium, hospedagem selecionada, alimentação descrita no roteiro, guias credenciados, seguro viagem e suporte 24h.",
	},
	{
		question: "Qual o nível de dificuldade das trilhas?",
		answer:
			"Indicamos o nível em cada roteiro. Há opções leves, moderadas e avançadas, sempre com briefing prévio e equipamentos adequados.",
	},
	{
		question: "Preciso de equipamento especial?",
		answer:
			"Só sugerimos itens pessoais. Fornecemos bastões, lanternas, mochilas e kits de primeiros socorros homologados.",
	},
	{
		question: "Como funciona o seguro?",
		answer:
			"Todos os viajantes são cobertos por seguro aventura com cobertura médica, resgate e assistência jurídica.",
	},
	{
		question: "Qual a política de cancelamento?",
		answer:
			"Cancelamentos até 30 dias recebem reembolso integral. Após esse prazo, oferecemos créditos para novas datas.",
	},
	{
		question: "Posso levar crianças?",
		answer:
			"Sim, indicamos roteiros family friendly com atividades adaptadas para crianças a partir de 8 anos.",
	},
];

export default function Home() {
	const [scrolled, setScrolled] = useState(false);
	const [galleryCategory, setGalleryCategory] = useState<string>(GALLERY_CATEGORIES[0]);
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const [openFaq, setOpenFaq] = useState<string>(FAQS[0].question);
	const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 700,
			offset: 80,
			easing: "ease-out",
		});
	}, []);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const filteredGallery = useMemo(() => {
		if (galleryCategory === "Todos") return GALLERY;
		return GALLERY.filter((item) => item.category === galleryCategory);
	}, [galleryCategory]);

	const visibleTestimonials = useMemo(() => {
		return Array.from({ length: 3 }, (_, offset) => {
			const index = (activeTestimonial + offset) % TESTIMONIALS.length;
			return TESTIMONIALS[index];
		});
	}, [activeTestimonial]);

	const handleFaqToggle = (question: string) => {
		setOpenFaq((current) => (current === question ? "" : question));
	};

	const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.currentTarget.reset();
	};

	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.3 },
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
	};

	return (
		<div className={styles.page}>
			<header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
				<div className={styles.logo}>
					<span>Vanamata</span>
					<small>Van na Mata</small>
				</div>
				<nav className={styles.nav}>
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<a className={styles.primaryButton} href="#contato">
					Reserve Agora
					<ArrowUpRight size={18} />
				</a>
			</header>

			<main>
				<section className={styles.hero} id="inicio">
					<div className={styles.heroMedia}>
						<Image
							src={HERO_IMAGE}
							alt="Van em estrada na serra ao pôr do sol"
							fill
							priority
							sizes="100vw"
						/>
						<div className={styles.heroOverlay} />
					</div>

					<div className={styles.heroContent}>
						<motion.p
							className={styles.heroKicker}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							Expedições boutique de van pelo Brasil
						</motion.p>
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
						>
							Aventuras Autênticas na Natureza Brasileira
						</motion.h1>
						<motion.p
							className={styles.heroSubtitle}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Montanhas, cachoeiras e trilhas inesquecíveis com conforto, segurança e grupos
							exclusivos de até 12 pessoas.
						</motion.p>
						<div className={styles.heroActions}>
							<a className={styles.primaryButton} href="#destinos">
								Explorar Destinos
							</a>
							<a className={styles.secondaryButton} href="#pacotes">
								Ver Pacotes
							</a>
						</div>
						<div className={styles.heroStats}>
							{HERO_STATS.map((stat) => (
								<div key={stat.label}>
									<strong>{stat.label}</strong>
									<span>{stat.detail}</span>
								</div>
							))}
						</div>
						<div className={styles.scrollIndicator}>
							<ChevronDown size={20} />
							<span>Role para explorar</span>
						</div>
					</div>
				</section>

				<section className={styles.section} id="diferenciais">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Por que Vanamata</p>
						<h2>Diferenciais que elevam sua expedição</h2>
					</header>
					<div className={styles.differentialsGrid}>
						{DIFFERENTIALS.map(({ title, description, icon: Icon }, index) => (
							<motion.article
								key={title}
								{...fadeInUp}
								className={styles.card}
								data-aos="fade-up"
								data-aos-delay={index * 80}
							>
								<span className={styles.iconBadge}>
									<Icon size={28} />
								</span>
								<h3>{title}</h3>
								<p>{description}</p>
							</motion.article>
						))}
					</div>
				</section>

				<section className={styles.section} id="destinos">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Destinos Selecionados</p>
						<h2>Seis regiões para se perder e se encontrar</h2>
					</header>
					<div className={styles.destinationsGrid}>
						{DESTINATIONS.map((destination, index) => (
							<article
								key={destination.name}
								className={styles.destinationCard}
								data-aos="fade-up"
								data-aos-delay={index * 80}
							>
								<div className={styles.destinationMedia}>
									<Image
										src={destination.image}
										alt={destination.name}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
									<div className={styles.destinationOverlay} />
								</div>
								<div className={styles.destinationContent}>
									<span>{destination.tag}</span>
									<h3>{destination.name}</h3>
									<p>{destination.description}</p>
									<button type="button">
										Descobrir
										<ArrowUpRight size={18} />
									</button>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className={styles.section} id="galeria">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Galeria Real</p>
						<h2>Momentos capturados nas últimas expedições</h2>
					</header>
					<div className={styles.galleryFilters} data-aos="fade-up" data-aos-delay="100">
						{GALLERY_CATEGORIES.map((category) => (
							<button
								key={category}
								type="button"
								className={category === galleryCategory ? styles.filterActive : ""}
								onClick={() => setGalleryCategory(category)}
							>
								{category}
							</button>
						))}
					</div>
					<div className={styles.galleryGrid}>
						{filteredGallery.map((photo, index) => (
							<div
								key={`${photo.location}-${photo.label}`}
								className={styles.galleryItem}
								onClick={() => setSelectedPhoto(photo)}
								role="button"
								tabIndex={0}
								data-aos="zoom-in"
								data-aos-delay={index * 40}
								aria-label={`Abrir ${photo.location}`}
								onKeyDown={(event) => {
									if (event.key === "Enter" || event.key === " ") {
										event.preventDefault();
										setSelectedPhoto(photo);
									}
								}}
							>
								<Image
									src={photo.image}
									alt={`${photo.location} - ${photo.label}`}
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
								<div className={styles.galleryMeta}>
									<span>{photo.category}</span>
									<strong>{photo.location}</strong>
									<small>{photo.label}</small>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className={styles.section} id="pacotes">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Pacotes Curados</p>
						<h2>Escolha o formato ideal para a sua aventura</h2>
					</header>
					<div className={styles.packagesGrid}>
						{PACKAGES.map((pkg) => (
							<motion.article
								key={pkg.title}
								className={`${styles.packageCard} ${pkg.popular ? styles.packagePopular : ""}`}
								{...fadeInUp}
								data-aos="fade-up"
							>
								{pkg.popular && (
									<span className={`${styles.packageBadge} ${styles.packagePopularBadge}`}>
										Mais reservado
									</span>
								)}
								{!pkg.popular && pkg.highlight && (
									<span className={styles.packageBadge}>{pkg.highlight}</span>
								)}
								<div>
									<p>{pkg.duration}</p>
									<h3>{pkg.title}</h3>
									<p>{pkg.description}</p>
								</div>
								<ul>
									{pkg.perks.map((perk) => (
										<li key={perk}>{perk}</li>
									))}
								</ul>
								<div className={styles.packageFooter}>
									<strong>{pkg.price}</strong>
									<button type="button">Consultar Disponibilidade</button>
								</div>
							</motion.article>
						))}
					</div>
				</section>

				<section className={styles.section} id="depoimentos">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Depoimentos</p>
						<h2>Histórias de quem já viveu a Vanamata</h2>
					</header>
					<div className={styles.carousel}>
						{visibleTestimonials.map((testimonial, index) => (
							<article
								key={testimonial.name}
								className={styles.testimonialCard}
								data-aos="fade-up"
								data-aos-delay={index * 120}
							>
								<div className={styles.testimonialHeader}>
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										width={56}
										height={56}
									/>
									<div>
										<strong>{testimonial.name}</strong>
										<span>
											{testimonial.location} • {testimonial.trip}
										</span>
									</div>
								</div>
								<p>“{testimonial.text}”</p>
								<div className={styles.rating}>
									{Array.from({ length: testimonial.rating }).map((_, index) => (
										<Star key={index} size={16} />
									))}
								</div>
							</article>
						))}
					</div>
				</section>

				<section className={styles.section} id="faq">
					<header className={styles.sectionIntro} data-aos="fade-up">
						<p>Perguntas Frequentes</p>
						<h2>Transparência em cada detalhe</h2>
					</header>
					<div className={styles.accordion}>
						{FAQS.map((faq) => (
							<article key={faq.question} className={styles.accordionItem}>
								<button type="button" onClick={() => handleFaqToggle(faq.question)}>
									<span>{faq.question}</span>
									<ChevronDown
										size={20}
										className={openFaq === faq.question ? styles.chevronOpen : ""}
									/>
								</button>
								{openFaq === faq.question && <p>{faq.answer}</p>}
							</article>
						))}
					</div>
				</section>

				<section className={styles.contact} id="contato" data-aos="fade-up">
					<div className={styles.contactMedia}>
						<Image
							src={buildUnsplashSrc("photo-1502920917128-1aa500764b43", 1400)}
							alt="Cachoeira com van Vanamata"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
						<div className={styles.contactOverlay}>
							<h2>Pronto para a próxima aventura?</h2>
							<p>
								Conte qual destino faz seus olhos brilharem e personalizamos o roteiro ideal.
							</p>
							<div className={styles.contactInfo}>
								<p>
									<PhoneCall size={18} /> +55 11 99999-0000
								</p>
								<p>
									<Camera size={18} /> @vanamata.experience
								</p>
								<p>
									<Compass size={18} /> Brasil • Operações móveis
								</p>
							</div>
						</div>
					</div>
					<form className={styles.contactForm} onSubmit={handleContactSubmit}>
						<p>Formulário</p>
						<h3>Quero minha aventura</h3>
						<label>
							Nome completo
							<input type="text" name="name" required placeholder="Luiza Andrade" />
						</label>
						<label>
							Email
							<input type="email" name="email" required placeholder="voce@email.com" />
						</label>
						<label>
							WhatsApp
							<input type="tel" name="phone" required placeholder="(11) 98765-4321" />
						</label>
						<label>
							Destino de interesse
							<select name="destination" required>
								{DESTINATIONS.map((destination) => (
									<option key={destination.name} value={destination.name}>
										{destination.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Mensagem (opcional)
							<textarea name="message" rows={4} placeholder="Conte mais sobre o que procura" />
						</label>
						<button className={styles.primaryButton} type="submit">
							Quero minha aventura
						</button>
					</form>
				</section>
			</main>

			{selectedPhoto && (
				<div className={styles.lightbox} onClick={() => setSelectedPhoto(null)}>
					<div className={styles.lightboxInner} onClick={(event) => event.stopPropagation()}>
						<Image
							src={selectedPhoto.image}
							alt={`${selectedPhoto.location} - ${selectedPhoto.label}`}
							fill
							sizes="80vw"
						/>
						<div className={styles.lightboxMeta}>
							<div>
								<strong>{selectedPhoto.location}</strong>
								<span>{selectedPhoto.label}</span>
							</div>
							<button type="button" onClick={() => setSelectedPhoto(null)}>
								Fechar
							</button>
						</div>
					</div>
				</div>
			)}

			<footer className={styles.footer}>
				<div>
					<h4>Vanamata</h4>
					<p>Vans boutique, experiências premium e natureza preservada.</p>
				</div>
				<div>
					<p>Links</p>
					<a href="#destinos">Destinos</a>
					<a href="#galeria">Galeria</a>
					<a href="#pacotes">Pacotes</a>
					<a href="#contato">Contato</a>
				</div>
				<div>
					<p>Contato</p>
					<span>+55 11 99999-0000</span>
					<span>contato@vanamata.com</span>
					<span>São Paulo • Brasil</span>
				</div>
				<div>
					<p>Redes</p>
					<a href="https://instagram.com/vanamata" target="_blank" rel="noreferrer">
						<Instagram size={16} /> Instagram
					</a>
					<a href="https://vanamata.com" target="_blank" rel="noreferrer">
						<Compass size={16} /> Blog
					</a>
				</div>
			</footer>
		</div>
	);
}

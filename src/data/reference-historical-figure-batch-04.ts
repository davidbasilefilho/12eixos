import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { peopleAfricaExpansion, peopleAfricaCandidates } from './reference-people-africa';
import { peopleAsiaExpansion } from './reference-people-asia';
import { peopleEuropeExpansion } from './reference-people-europe';

export interface HistoricalFigureBatch04Spec {
  id: string; name: string; period: string; rationale: string; caveats: string;
  sources: ReferenceSource[]; claims: ReferenceAxisCoding[]; unresolved: string[];
}
const date = '2026-10-07';
const s = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const c = (axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], sourceTitle: string, publishedDate: string, locator: string, statement: string, rationale: string, uncertainty: string): ReferenceAxisCoding => ({
  axis, position, confidence, claims: [{ sourceTitle, publishedDate, locator, statement, basis: 'declaration', accessedDate: date }], rationale, uncertainty, reviewedOn: date,
});
const t = {
  luthuli: 'Africa and Freedom — Albert Luthuli, 11 de dezembro de 1961',
  machel: 'The Liberation of Women — Samora Machel, 4 de março de 1973',
  annan: 'Nobel Lecture — Kofi Annan, 10 de dezembro de 2001',
  tutu: 'The Question of South Africa — Desmond Tutu, 23 de outubro de 1984',
  mabini: 'The True Decalogue — Apolinario Mabini, edição de 1922',
  bengurion: 'Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948',
  kant: 'Perpetual Peace — Immanuel Kant, 1795, tradução Mary Campbell Smith',
  hobbes: 'Leviathan — Thomas Hobbes, 1651',
  locke: 'Second Treatise of Government — John Locke, 1689',
  kropotkin: 'The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926',
};

export const historicalFigureBatch04Specs: HistoricalFigureBatch04Spec[] = [
  {
    id: 'albert-luthuli', name: 'Albert Luthuli', period: 'Africa and Freedom, palestra Nobel de 11 de dezembro de 1961',
    rationale: 'O discurso propõe democracia não racial, garantias civis e mediação internacional, com fundamento cristão público.',
    caveats: 'O prêmio é de 1960, mas o discurso é de 1961. Programa declarado, não auditoria da prática do ANC. Reconhece resistência armada provocada pela opressão; não é pacifismo absoluto.',
    sources: [s(t.luthuli, 'https://sahistory.org.za/archive/africa-and-freedom-1961', 'Transcrição histórica primária; parágrafos identificados por início textual.'), s('Cronologia de Luthuli — SAHO', 'https://sahistory.org.za/article/chief-albert-john-mvumbi-luthuli-timeline-1800-1967', 'Seção 1967 confirma falecimento em 21 de julho; identidade, sem transferir orientação biográfica.')],
    claims: [
      c('rep', 'strong-first', 'high', t.luthuli, '1961-12-11', 'Our vision has always been; cláusula (1) Government', 'Propõe sufrágio adulto individual e direito de todos concorrerem a órgãos governamentais.', 'Inclusão eleitoral constitutiva sustenta democracia forte.', 'Declaração de objetivo; não verifica realização institucional.'),
      c('pod', 'moderate-second', 'high', t.luthuli, '1961-12-11', 'This is a country where; It is a society where', 'Denuncia prisão arbitrária, censura e supressão de canais de expressão.', 'Garantias civis delimitam coerção estatal.', 'Não rejeita toda autoridade ou segurança.'),
      c('mor', 'moderate-first', 'medium', t.luthuli, '1961-12-11', 'Our vision has always been; cláusula (3) The removal', 'Exige democracia não racial e remoção de barreiras raciais.', 'Igualdade racial é um subtema emancipatório explícito.', 'Não cobre todas as dimensões atuais dos costumes.'),
      c('dip', 'moderate-second', 'medium', t.luthuli, '1961-12-11', 'Our continent has been carved up; conclusão With her own peculiar history', 'Propõe África mediadora entre potências e conversão de armas em fins pacíficos.', 'Mediação e desarmamento orientam a política internacional.', 'Reconhece luta armada sob opressão; preferência delimitada, não rejeição universal da força.'),
    ], unresolved: ['rel: fé pessoal e dever cívico das igrejas não estabelecem autoridade religiosa governante; permanece desconhecido. est/imi/int/eco/con/com/tec: sem passagem suficiente; oportunidade econômica racial não especifica propriedade produtiva.'],
  },
  {
    id: 'samora-machel', name: 'Samora Machel', period: 'Discurso à primeira conferência de mulheres moçambicanas, 4 de março de 1973',
    rationale: 'O programa liga emancipação feminina à transformação da propriedade produtiva e à crítica de normas religiosas de submissão.',
    caveats: 'Tradução reproduzida em Mozambique: Sowing the Seeds of Revolution, pp. 21–36. Não infere prática governamental posterior. Critica sexualidade, recusa de maternidade e emancipação mecânica como modelos; preserva os contrapesos.',
    sources: [s(t.machel, 'https://www.marxists.org/subject/africa/machel/1973/liberation-women.htm', 'Texto primário traduzido, seções 1b, 2a–c e 3a; a fala antecede independência e presidência.'), s('Samora Machel — SAHO', 'https://sahistory.org.za/people/samora-machel?page=1', 'Registro de identidade confirma 1933–1986; não gera eixos.')],
    claims: [
      c('eco', 'strong-first', 'high', t.machel, '1973-03-04', '1b The need for emancipation; 2a It is therefore clear; 2c We have seen', 'Define a propriedade privada dos meios de produção como raiz da exploração a ser destruída pela revolução.', 'Transformação estrutural da propriedade, não uma nacionalização setorial.', 'Não especifica aqui a forma jurídica da propriedade substituta nem a implementação posterior.'),
      c('mor', 'moderate-first', 'medium', t.machel, '1973-03-04', '1b; 2a lobolo e herança; 2c; 3a', 'Exige participação decisória das mulheres e combate sua compra, submissão conjugal e exclusão.', 'Direitos de gênero e crítica de hierarquia documentam o subtema emancipatório.', 'Rejeita modelos de liberdade sexual e recusa de maternidade; não é emancipação irrestrita ou todo o eixo moral.'),
      c('rel', 'moderate-first', 'medium', t.machel, '1973-03-04', '2b All superstitions and religions; 3a A third aspect', 'Combate ritos religiosos que transmitem inferioridade feminina e propõe educação científica contra mitos.', 'Crítica pública da sujeição religiosa sustenta direção secular parcial.', 'Não estabelece separação constitucional entre Estado e religião nem cobre toda expressão religiosa.'),
    ], unresolved: ['est/rep/pod/imi/dip/int/con/com/tec: não inferir de vanguarda partidária, guerra anticolonial, ciência escolar ou referência genérica a planejamento.'],
  },
  {
    id: 'kofi-annan', name: 'Kofi Annan', period: 'Palestra Nobel, 10 de dezembro de 2001',
    rationale: 'A fala associa paz a democracia, direitos individuais, diversidade cultural e uso de ciência e tecnologia para necessidades humanas.',
    caveats: 'Proposta como secretário-geral, não prova de execução ou unanimidade da ONU. Soberania não deve encobrir atrocidades, mas esta frase sozinha não codifica intervenção militar.',
    sources: [s(t.annan, 'https://www.kofiannanfoundation.org/publication/kofi-annan-nobel-lecture/', 'Texto primário completo conservado pela própria fundação.'), s('Kofi Annan 1938–2018 — família e fundação', 'https://www.kofiannanfoundation.org/publication/kofi-annan-1938-2018/', 'Comunicado de 18 de agosto de 2018 confirma falecimento; apenas identidade.')],
    claims: [
      c('rep', 'strong-first', 'high', t.annan, '2001-12-10', 'This will not be possible; The obstacles to democracy', 'Exige escolha do governo e mudança regular dos governantes como direito de todas as culturas.', 'Competição e alternância eleitorais são constitutivas da proposta.', 'Não detalha sistema eleitoral ou verifica cada Estado membro.'),
      c('pod', 'moderate-second', 'high', t.annan, '2001-12-10', 'Only in a democratic environment; This will not be possible', 'Protege religião, expressão, reunião, associação e igualdade perante a lei.', 'Garantias individuais delimitam poder público.', 'Não rejeita segurança ou autoridade policial; recorte de direitos fundamentais.'),
      c('mor', 'moderate-first', 'medium', t.annan, '2001-12-10', 'A forum was created; The rights of the individual', 'Defende igualdade entre mulheres e homens e direitos sem distinção racial ou econômica.', 'Igualdade civil documenta subtemas emancipatórios.', 'Não resolve aborto, gênero identitário ou todos os costumes.'),
      c('imi', 'moderate-second', 'medium', t.annan, '2001-12-10', 'We recognize that we are the products; People of different religions and cultures', 'Defende tradições próprias coexistindo com aprendizagem e respeito entre culturas.', 'Retenção cultural rejeita assimilação como única via.', 'Não é política de admissão ou irrestrição migratória.'),
    ], unresolved: ['tec: expectativa de ciência e tecnologia benéficas não fornece proposta concreta de adoção; fica contextual, sem codificação. est/dip/int/eco/con/com/rel: paz e cooperação genéricas, crítica da soberania e tolerância religiosa não resolvem esses construtos.'],
  },
  {
    id: 'desmond-tutu', name: 'Desmond Tutu', period: 'Pronunciamento ao Conselho de Segurança da ONU, 23 de outubro de 1984',
    rationale: 'A fala exige democracia não racial, rejeita coerção arbitrária e pede negociação pacífica com fundamento cristão público.',
    caveats: 'Texto publicado em Africa Report 30, janeiro–fevereiro de 1985, pp. 50–52, transcrito pelo projeto acadêmico Fordham. Não é a palestra Nobel de dezembro; não usa biografia como posição.',
    sources: [s(t.tutu, 'https://sourcebooks.web.fordham.edu/mod/1984tutu.asp', 'Transcrição primária com data e publicação; passagens autorais, não introdução editorial.'), s('Desmond Tutu — SAHO', 'https://sahistory.org.za/people/archbishop-emeritus-desmond-mpilo-tutu', 'Identidade e falecimento em 26 de dezembro de 2021.')],
    claims: [
      c('rep', 'moderate-first', 'high', t.tutu, '1984-10-23', 'By no stretch of the imagination; We dream of a new society', 'Rejeita constituição que exclui maioria negra e propõe democracia não racial.', 'Inclusão representativa sustenta direção democrática.', 'Não especifica aqui sufrágio e sistema eleitoral completos.'),
      c('pod', 'moderate-second', 'high', t.tutu, '1984-10-23', 'There is little freedom to disagree; I appeal on behalf of those who are banned', 'Rejeita silenciamento, banimento arbitrário e detenção sem julgamento.', 'Garantias limitam coerção estatal.', 'Crítica de repressão específica; não abole toda coerção.'),
      c('mor', 'moderate-first', 'medium', t.tutu, '1984-10-23', 'The most obnoxious features; We dream of a new society', 'Combate segregação racial de moradia, educação e cidadania.', 'Igualdade racial é um subtema emancipatório.', 'Não cobre todo o eixo moral ou posições posteriores.'),
      c('dip', 'moderate-second', 'medium', t.tutu, '1984-10-23', 'We are glad for the cessation; We deplore all forms; urge the authorities', 'Apoia cessação de hostilidades e conferência inclusiva, buscando transição com mínima violência.', 'Prioridade declarada de negociação sustenta direção pacífica parcial.', 'Grande parte do caso é doméstica; não prova pacifismo absoluto em todas as guerras.'),
    ], unresolved: ['rel: reconciliação cristã e imagem divina são fundamento motivacional, sem autoridade religiosa legislativa; permanece desconhecido. est/imi/int/eco/con/com/tec: denúncia de removidos internos, desemprego ou preços não prova política geral desses eixos.'],
  },
  {
    id: 'apolinario-mabini', name: 'Apolinario Mabini', period: 'The True Decalogue, texto revolucionário reproduzido pela Philippine Press Bureau, 1922',
    rationale: 'O decálogo exige autoridade eleita e república, subordinando deveres políticos a Deus e à consciência.',
    caveats: 'Edição póstuma de 1922; a fonte não data a redação do decálogo com precisão. A introdução biográfica e a Constituição mencionada nela não geram alegações autorais.',
    sources: [s(t.mabini, 'https://www.gutenberg.org/files/14660/14660-h/14660-h.htm', 'Seção The True Decalogue, assinada por Mabini; introdução confirma 1864–1903, falecimento em 13 de maio de 1903.' )],
    claims: [
      c('rep', 'strong-first', 'high', t.mabini, '1922 (edição póstuma; redação não datada nesta fonte)', 'Seventh e Eighth', 'Nega autoridade não eleita pelos cidadãos e exige república contra monarquia dinástica.', 'Autoridade eleitoral e rejeição dinástica são princípios constitutivos.', 'Vocabulário revolucionário histórico; não acrescenta regras modernas de sufrágio ausentes.'),
      c('rel', 'strong-second', 'high', t.mabini, '1922 (edição póstuma; redação não datada nesta fonte)', 'First, Fourth e Seventh', 'Coloca Deus acima do país e funda a autoridade eleita na consciência do povo que recebe autoridade divina.', 'Hierarquia religiosa expressa organiza o dever político.', 'Admite consciência livre e não autoriza inferência de supremacia clerical.'),
    ], unresolved: ['Outros dez eixos: independência nacional, estudo e autodefesa não são regras universais de intervenção, inovação ou poder estatal.'],
  },
  {
    id: 'david-ben-gurion-1948', name: 'David Ben-Gurion', period: 'Endosso da Declaração de Independência de Israel, 14 de maio de 1948',
    rationale: 'O endosso público vincula criação do Estado a representação eleita, liberdades, igualdade e coexistência cultural.',
    caveats: 'Declaração coletiva com assinatura explícita de Ben-Gurion: registra endosso, não autoria exclusiva. Normas prometidas não comprovam prática, cumprimento de prazos ou tratamento efetivo de árabes.',
    sources: [s(t.bengurion, 'https://avalon.law.yale.edu/20th_century/israel.asp', 'Texto primário reproduzido pela Yale Law Library; cláusulas e lista de assinaturas.'), s('BGU Milestones — Ben-Gurion University', 'https://www.bgu.ac.il/en/u/vps/pa-rd/bgu-milestones/', 'Cronologia institucional confirma morte em 1973; apenas identidade.')],
    claims: [
      c('rep', 'moderate-first', 'high', t.bengurion, '1948-05-14', 'WE DECLARE that, with effect; WE APPEAL to the Arab inhabitants', 'Promete constituinte eleita, autoridades regulares eleitas e representação igual de cidadãos árabes.', 'Compromisso institucional sustenta representação democrática.', 'Sem auditoria do cumprimento e sem sistema eleitoral completo na declaração.'),
      c('pod', 'moderate-second', 'high', t.bengurion, '1948-05-14', 'THE STATE OF ISRAEL will be open', 'Garante consciência, religião, linguagem, educação e cultura.', 'Liberdades explícitas limitam autoridade estatal.', 'Garantia normativa coletiva, não prática comprovada ou abolição da coerção.'),
      c('imi', 'moderate-second', 'medium', t.bengurion, '1948-05-14', 'THE STATE OF ISRAEL will be open', 'Promete liberdade linguística e cultural a todos os habitantes.', 'Manutenção cultural documenta direção não assimilacionista parcial.', 'Admissão imigratória privilegia judeus; não estende abertura migratória a todos.'),
      c('dip', 'moderate-second', 'medium', t.bengurion, '1948-05-14', 'WE EXTEND our hand to all neighboring states', 'Oferece paz, cooperação e boa vizinhança aos Estados e povos vizinhos.', 'Oferta diplomática documenta prioridade pacífica delimitada.', 'O documento também endossa defesa e esforço de guerra; não é pacifismo absoluto ou avaliação de toda a carreira.'),
      c('mor', 'moderate-first', 'medium', t.bengurion, '1948-05-14', 'THE STATE OF ISRAEL will be open', 'Promete igualdade social e política independentemente de religião, raça ou sexo.', 'Igualdade jurídica documenta subtemas emancipatórios.', 'Compromisso coletivo não é comprovação da prática ou posição sobre todos os costumes.'),
    ], unresolved: ['est/int/eco/con/com/rel/tec: invocação dos profetas e do Todo-Poderoso não estabelece autoridade religiosa legislativa; união econômica territorial não basta para doutrina comercial geral.'],
  },
  {
    id: 'immanuel-kant', name: 'Immanuel Kant', period: 'À paz perpétua, 1795; texto autoral na tradução Mary Campbell Smith',
    rationale: 'O tratado propõe limites jurídicos à guerra e intervenção, representação separada do executivo e discussão pública filosófica.',
    caveats: 'Codifica apenas o texto de Kant, a partir da p. 107, distinguindo longa introdução e notas da tradutora. Republicanismo kantiano admite monarquia representativa e rejeita democracia direta; não é democracia moderna plena.',
    sources: [s(t.kant, 'https://www.gutenberg.org/cache/epub/50922/pg50922-images.html', 'Seções autorais I–II e segundo suplemento; páginas impressas preservadas.'), s('Kant — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/50922', 'Identidade 1724–1804 e tradutora; ignora resumo automático para posicionamento.')],
    claims: [
      c('dip', 'moderate-second', 'high', t.kant, '1795', 'Artigo preliminar 3, pp. 110–111; primeiro definitivo, pp. 122–123', 'Pede abolição progressiva de exércitos permanentes e consentimento dos cidadãos para guerra.', 'Limites e instituições de paz sustentam direção pacífica.', 'Admite preparação defensiva voluntária e situações de guerra; não proíbe toda força.'),
      c('int', 'moderate-first', 'high', t.kant, '1795', 'Artigo preliminar 5, pp. 113–114', 'Proíbe interferência violenta na constituição e administração de outro Estado.', 'Regra explícita sustenta não intervenção.', 'Permite assistência a facções quando o Estado já se desintegrou; alcance não absoluto.'),
      c('rep', 'moderate-first', 'medium', t.kant, '1795', 'Primeiro artigo definitivo, pp. 124–128', 'Exige representação e separação entre legislativo e executivo.', 'Limitação do poder e representação sustentam direção democrática parcial.', 'Admite monarquia e aristocracia representativas e condena democracia direta; não prova sufrágio universal.'),
      c('pod', 'moderate-second', 'high', t.kant, '1795', 'Segundo suplemento, pp. 159–160', 'Exige que autoridades permitam discussão pública livre por filósofos.', 'Garantia de expressão limita coerção em um campo específico.', 'Não generaliza liberdade irrestrita de todas as organizações ou resistência armada.'),
    ], unresolved: ['est: federação entre Estados independentes não é estrutura federativa interna.', 'com: comércio como mecanismo de paz não especifica regime de tarifas ou abertura.', 'imi/eco/con/rel/mor/tec: sem alegação suficiente neste recorte.'],
  },
  {
    id: 'thomas-hobbes', name: 'Thomas Hobbes', period: 'Leviathan, 1651; capítulos XVIII–XIX e XXI',
    rationale: 'O tratado prefere vantagens da monarquia ao governo por assembleias e admite controle de doutrina e expressão por segurança.',
    caveats: 'A instituição pode resultar de maioria e o soberano pode ser uma assembleia. A preferência comparativa pela monarquia não nega legitimidade das demais formas. Há liberdades residuais e autodefesa.',
    sources: [s(t.hobbes, 'https://www.gutenberg.org/cache/epub/3207/pg3207-images.html', 'Texto primário; consequências no XVIII, comparação de regimes no XIX e liberdades no XXI.'), s('Hobbes — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/3207', 'Identidade 1588–1679, sem usar resumo automático.')],
    claims: [
      c('rep', 'moderate-second', 'medium', t.hobbes, '1651', 'XIX, Comparison of Monarchy, argumentos First a Sixth', 'Argumenta que monarquia alinha interesses e oferece decisões e aconselhamento superiores aos de assembleias.', 'Preferência comparativa por governo de uma pessoa sustenta direção autocrática parcial.', 'Reconhece democracia e aristocracia como formas legítimas e inconvenientes da monarquia; soberania absoluta por si só não prova autocracia.'),
      c('pod', 'strong-first', 'high', t.hobbes, '1651', 'XVIII, consequência 6 e Judge of What Doctrines; contrapeso XXI Liberty of a Subject', 'Autoriza soberano a censurar livros e expressão para segurança e paz.', 'Supremacia coerciva sobre opinião é constitutiva da teoria.', 'Permite escolhas onde a lei silencia e resistência individual a autolesão; não é controle total de cada comportamento.'),
    ], unresolved: ['est/imi/dip/int/eco/con/com/rel/mor/tec: soberania indivisível não prova estrutura territorial; propriedade jurídica e teologia não foram convertidas automaticamente em políticas.'],
  },
  {
    id: 'john-locke', name: 'John Locke', period: 'Second Treatise of Government, 1689; capítulos V, XI e XIII',
    rationale: 'O tratado combina consentimento e representação, limites ao arbítrio e apropriação privada produtiva com fundamento de lei natural divina.',
    caveats: 'Não é democracia inclusiva atual: admite formas monárquicas e condição histórica de sujeitos. Commons, limites de desperdício e a obrigação de preservação acompanham propriedade; não equivale a laissez-faire irrestrito.',
    sources: [s(t.locke, 'https://www.gutenberg.org/cache/epub/7370/pg7370-images.html', 'Texto primário numerado; não atribui ao autor citações de Hooker sem separar os parágrafos próprios.'), s('Locke — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/7370', 'Identidade 1632–1704; resumo automático não sustenta posicionamento.')],
    claims: [
      c('rep', 'moderate-first', 'high', t.locke, '1689', 'XI §134; XIII §§149 e 154–155', 'Funda legislação em consentimento e permite representantes escolhidos e resistência ao executivo que impede a legislatura.', 'Representação e controle populares sustentam direção democrática.', 'Admite outras formas de composição legislativa; não garante sufrágio moderno universal.'),
      c('pod', 'moderate-second', 'high', t.locke, '1689', 'XI §§135–137', 'Nega poder arbitrário sobre vida e liberdade, exigindo leis publicadas e juízes conhecidos.', 'Limites jurídicos documentam liberdade civil.', 'Mantém coerção e punição legal, não abole o Estado.'),
      c('eco', 'moderate-second', 'medium', t.locke, '1689', 'V §§27–33, especialmente §28 servant e §32 land', 'Defende apropriação privada de terra cultivada e produtos do trabalho, inclusive trabalho de servos.', 'Propriedade de recursos produtivos sustenta direção privada parcial.', 'Mantém bens comuns e limites de uso; não especifica organização completa de serviços públicos ou indústria moderna.'),
      c('rel', 'moderate-second', 'medium', t.locke, '1689', 'XI §135, parágrafo Thus the law of nature stands', 'Exige que normas de legisladores obedeçam à lei natural entendida como vontade divina.', 'Fundamento divino limita juridicamente a legislação.', 'É argumento de lei natural, não supremacia de clérigos ou estabelecimento de igreja.'),
    ], unresolved: ['est: federative power refere-se a relações externas, não federalismo territorial.', 'imi/dip/int/con/com/mor/tec: sem alegação equivalente; teoria de propriedade não gera mercado/planejamento automaticamente.'],
  },
  {
    id: 'peter-kropotkin', name: 'Piotr Kropotkin', period: 'The Conquest of Bread, 1892, com prefácio autoral de janeiro de 1913; edição de 1926',
    rationale: 'A obra propõe comunas federadas, capital produtivo comum, organização voluntária e produção dirigida a necessidades, com emancipação doméstica apoiada em máquinas.',
    caveats: 'Edição inglesa de 1926 via Gutenberg/MIA; datas de prefácio e corpo distinguidas. Comum não significa necessariamente estatal; planejamento por necessidades não implica centro nacional coercivo.',
    sources: [s(t.kropotkin, 'https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm', 'Texto primário: prefácio assinado janeiro de 1913; corpo originalmente francês de 1892; tradução inglesa sem tradutor identificado nesta página.'), s('Kropotkin — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/23428', 'Identidade 1842–1921; sem inferir orientação biográfica.')],
    claims: [
      c('est', 'strong-first', 'high', t.kropotkin, '1913-01 (prefácio da edição de 1926)', 'Prefácio, gradually developed e To the Communes; 3.2 The independence', 'Propõe comunas autônomas agroindustriais federando-se em nações, por acordo.', 'Autonomia local federativa é constitutiva da proposta.', 'Alternativa anarquista ao Estado; não é federação constitucional moderna de poderes estatais.'),
      c('eco', 'strong-first', 'high', t.kropotkin, '1892 (edição de 1926)', '2.1 But, if plenty; 3.1 Communism without government', 'Exige propriedade comum de terras, fábricas e infraestrutura produtiva.', 'Transformação de todo capital produtivo sustenta direção coletiva forte.', 'Não equivale a estatização administrativa.'),
      c('pod', 'strong-second', 'high', t.kropotkin, '1892 (edição de 1926)', '3.2 men at last attempt; mutual agreement; reduce Government interference to zero', 'Substitui leis coercivas e Estado por acordos voluntários entre indivíduos e grupos.', 'Abolição constitutiva da coerção estatal sustenta liberdade forte.', 'Admite expropriação revolucionária e conflito; não afirma ausência de qualquer violência social.'),
      c('con', 'moderate-first', 'medium', t.kropotkin, '1892 (edição de 1926)', '14.1 We study the needs; Is it not the study; Let us not lose sight', 'Orienta organização da produção pelo levantamento e satisfação das necessidades de todos.', 'Alocação deliberada por necessidades sustenta planejamento parcial.', 'Coordenação descentralizada por acordo; não confundir organização voluntária com planejamento estatal central.'),
      c('mor', 'moderate-first', 'medium', t.kropotkin, '1892 (edição de 1926)', '10.2 To emancipate woman; Half humanity', 'Exige emancipação das mulheres do trabalho doméstico que impede vida social.', 'Igualdade de gênero sustenta subtema emancipatório.', 'Mantém maternidade como possibilidade; não resolve todos os costumes atuais.'),
      c('tec', 'moderate-first', 'medium', t.kropotkin, '1892 (edição de 1926)', '10.2 Machinery undertakes; Machines of all kinds; common heating apparatus', 'Propõe máquinas domésticas e redes coletivas de energia para reduzir trabalho extenuante.', 'Adoção tecnológica para emancipação sustenta otimismo parcial.', 'Aplicação específica; não é aprovação irrestrita de toda inovação.'),
    ], unresolved: ['rep/imi/dip/int/com/rel: não inferir mecanismo eleitoral, política externa, tarifas ou religião apenas do anarquismo.'],
  },
];

const dormant = [...peopleAfricaExpansion, ...peopleAsiaExpansion, ...peopleEuropeExpansion];
/** Complete old profiles kept exclusively for audit; no old axis is promoted by default. */
export const historicalFigureBatch04OriginalRecords: Record<string, ReferenceEntry> = Object.fromEntries(historicalFigureBatch04Specs.flatMap(spec => {
  const original = dormant.find(entry => entry.id === spec.id);
  return original ? [[spec.id, structuredClone(original)]] : [];
}));
/** Three African archival candidates had no vectors or political evidence to preserve. */
export const historicalFigureBatch04OriginalCandidates = structuredClone(peopleAfricaCandidates.filter(candidate => historicalFigureBatch04Specs.some(spec => spec.id === candidate.id)));

export const historicalFigureBatch04: ReferenceEntry[] = historicalFigureBatch04Specs.map(spec => {
  const old = historicalFigureBatch04OriginalRecords[spec.id] ?? historicalFigureBatch04OriginalCandidates.find(candidate => candidate.id === spec.id);
  if (!old || old.name !== spec.name) throw new Error(`Missing or mismatched historical identity: ${spec.id}`);
  const entry: ReferenceEntry = {
    id: old.id, name: old.name, kind: 'person', category: 'historical-figure', period: spec.period,
    rationale: spec.rationale, caveats: spec.caveats, sources: spec.sources,
    vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {},
  };
  for (const input of spec.claims) {
    const coded = codeReferenceAxis(input, entry.sources);
    entry.vec[input.axis] = coded.value;
    entry.evidence[input.axis] = coded.evidence;
    entry.axisEvidence![input.axis] = coded.axisEvidence;
    entry.coding![input.axis] = coded.coding;
  }
  return entry;
});

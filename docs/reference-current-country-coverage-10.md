# Países atuais — cobertura10 aceita

Cinco identidades atuais existentes, três códigos REL60 aceitos e duas descrições políticas qualitativas sem score;57 eixos desconhecidos, zero elegíveis e zero novas identidades. Aceitação independente e Root concluídas; integração apenas pelo responsável após liberação. Não alterar gate de seis eixos.

| Registro existente | Conteúdo proposto | Versão |
|---|---|---|
| ethiopia-current-2025 | REL60 | original1995 |
| uganda-current-2025 | REL60 | revisão31/12/2023 |
| rwanda-current-2025 | REL60 | Gazette04/08/2023 |
| malawi-current-2025 | qualitativa,0 | consolidação até38/1998 |
| botswana-current-2025 | qualitativa,0 | republicação sem consolidação datada comprovada |

## Leituras efetivas e limites

Etiópia: [Gazette oficial inglesa paralela](https://justice.gov.et/wp-content/uploads/2025/02/%E1%8A%A0%E1%8B%8B%E1%8C%85-%E1%89%81%E1%8C%A5%E1%88%AD-1-1987.pdf),38p abriu direto. Autor leu header/p0 e11(1–3)p3,34(4–5)p10,78(5)p28. Separação/ausência de religião estatal/não interferência recíproca convivem com reconhecimento de casamento e foro religioso/customário consentido e tribunais reconhecíveis. Adoção8/12/1994, vigência21/08/1995; upload2025 não nova constituição. Não leitura de38p integral, certificaçãoamárica ou prática/consolidação2026.

Uganda: [ULII versão31/12/2023](https://ulii.org/en/akn/ug/act/statute/1995/constitution/eng%402023-12-31), direto403. Corpos primários indexados efetivamente lidos: header/preâmbulo/objetivosIII/XVIII/5–9/29–40 selecionados e quartoanexo de juramentos. Norma7 veda religião estatal;29(1)(c) admite prática conformeConstituição. Contrapontos: preâmbuloFORGODANDMYCOUNTRY, escolas confessionaisXVIII(iii) sujeitas política/padrões nacionais, juramento divino OU afirmação solene. RepublicaçãoLaws.Africa/ULII com nota de revisãoLawReformCommission; não Gazette íntegra. Adoção22/09/1995, vigência8/10/1995, versão31/12/2023, sem média de prática2026. Query que recuperou corpo: `site:ulii.org/en/akn/ug/act/statute/1995/constitution/eng%402023-12-31 "7." "29." "religious bodies"`.

Ruanda: [RLRC Gazette2023](https://www.rlrc.gov.rw/fileadmin/user_upload/RLRC/Laws_of_Rwanda_v2/Domestic_laws/Laws_in_force/1._Fundamental/1.1._National_Instruments/1.1.1._Constitution/1.1.1.1._Constitution_of_the_Rep._of_Rwanda_2023.pdf)4(1–2) completo indexado lido após403 direto; declara República secular. [RGB mesmaGazette](https://www.rgb.rw/fileadmin/user_upload/RGB/Publications/LAWS_AND_REGULATIONS/THE_CONSTITUTION_OF_THE_REPUBLIC_OF_RWANDA.pdf) inicialmente abriu149p/metadados; reabertura/find falharamInternalError/timeout. Corpos37(1–2),41 e176/assinaturas indexados efetivamente lidos: crença/culto conformelei, discriminação/divisionismo puníveis e limites por direitos alheios/moral/ordem/bem-estar.176 promulgação/publicação e assinatura4/08/2023, sem inventar norma2015. Query de4: `"Official Gazette n° Special of 04/08/2023" "secular" "4"`;37/41: URLRGB exata + artigos/termos. Leitura inglesa apenas, não certificaçãoKinyarwanda ou149p integral. [RGB supervisão religiosa](https://www.rgb.rw/1/civil-society-faith-based-and-political-organisations/faith-based-organisations) ofereceu corpo completo efetivamente lido: registro/personificação, fiscalização/suspensão/revogação e requisitos. Página sem data de atualização comprovada remete2003/2015; contraponto administrativo declarado consultado2026, não auditoria de execução ou nova regra2023.

Malawi: [MinistérioJustiçaPDF](https://justice.gov.mw/sites/default/files/2021-06/Malawi%20Constitution.pdf),93p abriu; header lista alterações1994/1995/1997/38de1998. Autor leu direto1–13 e corpos completos indexados31–39/44(1–5) selecionados. Upload2021 não consolidação2021. Curl403 e nenhum scanlocal. Associação/consciência/opinião/expressão/imprensa/reunião são garantidas; informação37 sujeita a lei parlamentar.44(1) núcleo inderrogável,44(2–3) limites razoáveis necessários sem destruir conteúdo,44(5) escolha de profissional pode ser limitada quando serviço é estatal. Nenhum scorePOD ou REL: consciência não prova toda relação religiosa estatal. Emergência45 não analisada inteira e norma1998 não todas alterações/prática2026. Queries exatasURL + `"Every person has the right to freedom of conscience"` e `"44." "limitations"`.

Botswana: [ParlamentoPDF](https://parliament.gov.bw/images/constitution.pdf), direto timeout;11(1–5) completo indexado lido e copyrightGovernmentBotswana visível. Religião/culto/mudança/proselitismo e recusa de juramento; escolas próprias às expensas das comunidades, consentimento próprio/guardião para rito escolar diverso.11(5) permite limites de defesa/segurança/ordem/moral/saúde/direitos alheios com justificação democrática. Sem scoreREL por inferência de religião estatal ou POD da cláusula única. Data da consolidação não comprovada; publicação/crawl recente não transformado em data da norma. Query: `site:parliament.gov.bw/images/constitution.pdf "Protection of freedom of conscience" "11." "5."`.

## Preservação e verificação

`currentCountryCoverage10Before` arquiva exatamente cinco registrosLIVE inteiros, todos valores/mapas/textos/fontes antigos. `extendCurrentCountryCoverage10` exige igualdadeJSON de todo registro antes da substituição; mantém fontes antigas exatas e na mesma ordem, preserva revisões posteriores úteis inclusive apenas metadados e composição repetida retorna identidade. Raw não localizado vai para50 desconhecido sem evidência/mapa/código; três REL usam `codeReferenceAxis` para alinhar código/evidência/gate. Não criar país151 nem substituir identidades. Validação autoral específica e typecheck registrados após execução; revisão independente concluída no escopo adicional abaixo.

Validação autoral concluída: `tsc --noEmit` passou; `/tmp/audit-current10.ts` confirmou exatamenteREL para três perfis/zero para dois, fonte antiga intacta, input não mutado, todos desconhecidos sem evidência/mapa/código, composição idempotente e preservação de revisões posteriores em caveats/fontes. Revisão independente solicitada nesse fechamento autoral e posteriormente concluída no escopo abaixo.

Notas visíveis revisadas para apresentar preservação documental em linguagem simples, sem nome interno do export ou valor de desconhecimento. Arquivo literal completo e fontes exatas permanecem preservados; runtime de alinhamento/guardas e typecheck passaram após a mudança.

## Aceitação independente final

Root aceitou três REL60 normativos e duas descrições qualitativas sem scores. Revisor: Etiópia direto11/27/34/78selecionados; Uganda indexadoheader2023/preâmbulo/III/XVIII/7/29completos, juramentos continuam leitura do autor; Ruanda indexado4inteiro/37(1–2)/41inteiros e página administrativaRGB inteira, wording2015 separado deGazette2023; Malawi31–39/44inteiros indexados; Botswana11(1–5)inteiro indexado. Nenhum PDF inteiro/prática2026/versão integral atual certificado. Toda falha direta do autor permanece declarada.

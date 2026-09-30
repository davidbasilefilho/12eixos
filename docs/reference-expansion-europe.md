# Expansão de figuras políticas europeias

O módulo `src/data/reference-people-europe.ts` acrescenta **75 figuras políticas e históricas** à cobertura europeia: 10 pessoas públicas vivas em 30 de setembro de 2026 e 65 figuras históricas. A seleção cruza Europa ocidental, oriental e central, países nórdicos e Europa meridional. As entradas são distintas dos identificadores e nomes já presentes no catálogo de pessoas compartilhado no momento da coleta.

## Como interpretar os vetores

Cada vetor segue os doze eixos e a direção de primeiro polo definidos em `src/data/references.ts`. Os números são estimativas editoriais, não respostas observadas nem uma medida científica da personalidade privada. Em perfis de governantes, a base é um recorte delimitado de governo, campanha, manifesto ou pronunciamento; não se deve atribuir automaticamente cada política de um gabinete a uma pessoa.

Toda dimensão sem suporte suficiente permanece em **50**. Uma pontuação afastada de 50 só deve contar para comparação quando tiver uma chave de evidência `high` ou `medium` e um registro `axisEvidence` que aponte para o título de fonte correspondente e explique a direção daquela dimensão. Os textos originais e documentos institucionais são priorizados; biografias institucionais e estudos históricos são usados quando fornecem contexto que não está reunido num documento primário. Uma fonte secundária pode estabelecer a trajetória pública, mas não transforma sozinha uma estimativa em fato mensurado. Perfis biográficos cuja fonte registra cargos ou carreira sem sustentar posições por dimensão ficam catalogados com vetor central, sem pontuação inferida.

O requisito de seis eixos com evidência média/alta protege a ordenação de proximidade contra perfis com muitos eixos desconhecidos. Ele não autoriza completar um vetor por intuição: dimensões desconhecidas ficam centrais, e perfis sem cobertura suficiente permanecem apenas no catálogo. A expansão não persegue uma quota de perfis ranqueáveis; é preferível manter cobertura histórica e geográfica no catálogo do que transformar lacunas documentais em estimativas.

## Fontes e limites

As referências por entrada incluem textos primários em Project Gutenberg, Marxists Internet Archive e German History in Documents and Images, arquivos parlamentares e presidenciais, União Europeia, Nobel Prize, Nações Unidas e governos nacionais. Cada `axisEvidence` repete o título da fonte efetivamente listada naquela entrada e registra por que aquele conteúdo apoia a direção estimada. A mera inclusão de uma pessoa não implica que todos os doze eixos sejam conhecidos. O módulo não constitui pesquisa biográfica exaustiva: afirmações sintéticas e vetores são estimativas documentais circunscritas, e fontes de páginas institucionais devem ser reavaliadas quando links mudarem ou quando novos documentos primários estiverem disponíveis.

O período explícito na ficha delimita a comparação e ajuda a evitar a mistura de fases políticas distintas. Casos cuja política mudou de forma importante — como transições pós-autoritárias, presidências longas e reformas econômicas — recebem ressalvas junto ao vetor. As figuras vivas foram classificadas conforme a data de corte de 30 de setembro de 2026; períodos de mandato não significam que a pessoa estava viva apenas durante aquele intervalo. O catálogo não mede popularidade, legitimidade moral ou aprovação eleitoral e não deve ser lido como recomendação política.

Vários verbetes são úteis para consulta e contexto, mas não alcançam o limiar documental para ranqueamento. A classificação entre figura pública e histórica foi feita segundo se a pessoa estava viva na data de referência; ela deve ser atualizada quando o catálogo for mantido em datas futuras.

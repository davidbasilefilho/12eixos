# Publicação no ChatGPT Sites

Este projeto usa Vite para gerar um site estático. O Site lê o conteúdo de `dist` conforme `.openai/hosting.json`:

```json
{
  "static": { "directory": "dist" }
}
```

Depois do registro, o mesmo arquivo deve conter o `project_id` opaco devolvido por `sites_create_site`. Não invente nem altere esse identificador. O build deve produzir `dist/index.html` e seus assets. Verifique que a hospedagem serve `/results` e as rotas de questionário em navegação direta; o funcionamento da aplicação SPA depende disso.

## Primeiro registro

1. Leia `.openai/hosting.json`. Se já existir `project_id`, reutilize o Site e não chame `sites_create_site` novamente.
2. Sem `project_id`, chame `sites_create_site` uma vez com `slug: "12eixos"`, `title: "12eixos"` e descrição apropriada. A slug pode estar indisponível; nesse caso escolha uma variação válida. O Site nasce privado.
3. Grave o ID retornado de modo atômico com:

   ```bash
   node /c/Users/david.basile/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/scripts/set-project-id.mjs --project-id '<id-retornado>'
   ```

4. Preserve a credencial de repositório apenas na memória da sessão. Se estiver ausente ou expirada, use `sites_create_source_repository_write_credential` para o mesmo `project_id`.

## Push, pacote e deploy

O script oficial faz checks e build, commita/pusha o source ao servidor Git do Sites e empacota o output estático. Execute no checkout do projeto, em terminal interativo, sem colocar o token em argumentos ou arquivos:

```bash
node /c/Users/david.basile/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/scripts/site-workflow.mjs --project-id '<project_id>'
```

Quando aparecer `Ready for Site workflow JSON on stdin (input is hidden).`, envie uma única linha JSON com:

```json
{
  "credential": "<objeto exato devolvido pelo Sites>",
  "commands": [["bun", "run", "build"]],
  "archivePath": "C:\\Users\\david.basile\\dev\\12axes\\.sites-runtime\\12eixos.tar.gz"
}
```

`credential` no exemplo representa **o objeto**, não uma string; os campos exigidos incluem `auth_mode`, `token`, `remote_url` e `branch`. O caminho do arquivo tar deve ser absoluto. O helper usa Node por exigência da integração Sites; os comandos de instalação, build e testes do aplicativo podem usar Bun. Conserve o archive sem alterações até o salvamento da versão. O JSON final do script fornece `project_id`, `checkout_path`, `commit_sha` e `archive`.

Para publicação pública solicitada, chame `sites_update_site_access` com `access_mode: "public"` para o mesmo projeto. Salve com `sites_save_site_version({ project_id, commit_sha, archive })`, usando os valores exatos retornados pelo workflow; então publique com `sites_deploy_site_version({ project_id, version_id: <id-da-versão> })`. O deploy usa uma versão salva, nunca o build local diretamente. Se o retorno for `pending`, `building` ou `publishing`, consulte `sites_get_deployment_status` pelo `deployment_id` até `succeeded`. Apenas um retorno bem sucedido com URL confirma publicação.

Todo URL de deploy do Sites é de produção. O estado de audiência é separado do estado de deploy: uma URL de produção pode continuar privada. Mantenha o público apenas enquanto esse for o acesso solicitado.

## Fontes operacionais

- `sites-building/SKILL.md`, `references/registration.md` e `references/project-setup/portable.md` no plugin Sites instalado.
- `sites-hosting/SKILL.md` e `scripts/site-workflow.mjs` no mesmo plugin.
- Schemas atuais dos tools nativos `sites_create_site`, `sites_update_site_access`, `sites_save_site_version`, `sites_deploy_site_version` e `sites_get_deployment_status`.

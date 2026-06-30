Lab-03: Blindando o Código - SAST e Secret Scanning
Bem-vindo ao terceiro laboratório do nosso Workshop de DevSecOps! 🛡️

Neste lab, subiremos o nível: sairemos da análise de dependências (SCA) e entraremos na análise do código-fonte proprietário e na proteção de credenciais críticas.

🎯 Objetivo do Lab
Implementar a análise estática de segurança (SAST) e garantir que nenhum segredo (senhas ou tokens) seja exposto no histórico do repositório.

🛠 O que vamos aprender
SAST (CodeQL): Como identificar falhas de lógica (SQL Injection, XSS) antes mesmo do código ser executado.

Secret Scanning: Como o GitHub detecta automaticamente chaves de API expostas em código.

Governança: A importância de uma política de segurança (SECURITY.md) em projetos reais.

📝 Roteiro de Execução
Fork: Faça um fork deste repositório.

Configuração: Acesse Settings > Code security and analysis e ative o Code scanning (Default setup) e o Secret scanning.

Investigação: Navegue até a aba Security e verifique os alertas de "vulnerabilidades de código" e "segredos expostos" que inserimos propositalmente.

Correção: Edite o index.js para mitigar as falhas de segurança encontradas.

Governança: Crie o arquivo SECURITY.md seguindo as boas práticas sugeridas em aula.

⚠️ Aviso
Este repositório contém vulnerabilidades propositais para fins educacionais. Não utilize estes padrões em produção!

Workshop ministrado por: [Fernando Anunciacao]
Linkedin: fernando-anunciacao-3415b5241

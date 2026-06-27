---
title: "Comment mettre en place ton premier agent IA avec Hermes"
date: "2026-06-28"
description: "Un guide pratique pour passer du chatbot à l'agent autonome — même si tu n'es pas développeur."
tags: ["IA", "Agents", "Hermes", "Tutoriel", "Automatisation"]
coverImage: "/images/blog/8.png"
coverAlt: "Configuration de Hermes agent IA"
published: true
---

## C'est quoi l'intelligence artificielle ?

L'intelligence artificielle c'est donner à une machine la capacité de faire des trucs qui demandent normalement une forme d'intelligence humaine :

- Comprendre du texte
- Reconnaître une image
- Recommander du contenu
- Écrire, analyser, prédire ou prendre une décision

Pour beaucoup de monde, tout a commencé le 30 novembre 2022 quand OpenAI a lancé ChatGPT. En quelques jours, des millions de personnes ont découvert ce que ça fait de parler à une machine intelligente.

Mais sous le capot, cette technologie remonte à 2017. Des chercheurs de Google ont publié un papier qui s'appelle *Attention Is All You Need*, qui a introduit l'architecture **Transformer** — la base sur laquelle sont construits tous les modèles qu'on utilise aujourd'hui.

---

## L'ère des agents IA

Depuis 2024, l'IA ne répond plus juste à des questions. Elle commence à **exécuter des tâches** avec des outils.

La différence c'est ça :

| Chatbot | Agent IA |
|---|---|
| Répond aux questions | Reçoit un objectif |
| Donne des idées | Planifie les étapes |
| L'humain fait le travail | Utilise des outils |
| | Exécute des actions tout seul |

Un chatbot c'est un assistant. Un agent c'est quelqu'un qui fait le boulot à ta place.

---

## Le stack qu'on va utiliser

Les agents ne fonctionnent pas seuls. Ils ont besoin d'outils connectés pour agir dans le monde réel. Voilà ce qu'on va mettre en place :

- **Hermes** — Notre agent central. Il reçoit un objectif, prend les bons outils et exécute sans que t'aies besoin de faire quoi que ce soit à chaque étape.
- **Oh My Hermes** — La couche de planification qui orchestre les actions de Hermes.
- **OpenAI API** — Pour générer des images et du texte.
- **Supabase** — Notre base de données.
- **Vercel** — Le déploiement. Une commande et c'est en ligne.
- **SeedDance** — Pour générer des vidéos.
- **Buffer** — Pour publier sur les réseaux sociaux automatiquement.
- **GitHub** — Pour le code et le pipeline de déploiement Vercel.
- **Hyperframes** — Pour les workflows visuels.

---

## Installer Hermes

### C'est quoi Hermes exactement ?

Hermes c'est un agent IA autonome. C'est ce qu'on appelle un **harness** — concrètement tu prends un modèle LLM, tu connectes des outils autour, et maintenant il peut enchaîner des actions tout seul.

Ce qui le distingue des autres c'est comment il gère la **mémoire**. Il apprend en créant des *skills* — des procédures qu'il peut réutiliser la prochaine fois qu'il doit refaire la même chose.

Il y a d'autres agents comme OpenClaw ou OpenHuman mais pour ce guide on reste sur Hermes.

---

### Où faire tourner l'agent ?

> ⚠️ Les agents peuvent faire des actions irréversibles. C'est pour ça qu'on recommande de ne pas les faire tourner sur ta machine personnelle — sauf pour tester.

Pour un vrai usage, tu veux un **VPS** — un serveur dans le cloud. L'agent tourne là-dessus, il est dispo 24h/24, et tu n'as aucun impact sur ta machine.

Deux options que je recommande :

**Hostinger** — tu déploies en un clic via leur marketplace.
👉 [hostinger.com/applications/hermes-agent](https://www.hostinger.com/applications/hermes-agent)
~14 $/mois, ou ~5,8 $/mois en annuel.

**Hetzner** — beaucoup moins cher, sans engagement, mais faut faire la config toi-même.
👉 [hetzner.com/cloud/cost-optimized](https://www.hetzner.com/cloud/cost-optimized)
À partir de 6 €/mois (~4 000 XOF).

Pour te connecter au serveur après l'achat :

![Connexion serveur](/images/blog/1.png)
![Connexion serveur](/images/blog/2.png)
![Connexion serveur](/images/blog/3.png)

- Hetzner : [youtube.com/watch?v=RP8ejknhrcE](https://www.youtube.com/watch?v=RP8ejknhrcE)

![Hetzner](/images/blog/4.png)

- Hostinger : [youtube.com/watch?v=TkT_B_S6wNY](https://www.youtube.com/watch?v=TkT_B_S6wNY)

> Tu veux juste tester en local ? Tu peux passer directement à l'étape suivante.

---

### L'installation

Deux façons de faire :

**Interface visuelle** — télécharge l'app depuis le site :
👉 [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)

**Terminal** — une fois connecté à ton serveur, tu copies ça :

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

![Installation](/images/blog/5.png)
![Installation](/images/blog/6.png)
![Installation](/images/blog/7.png)

> Tu peux aussi demander à **Claude Code** de faire toute l'installation à ta place. 🙈

---

### Choisir ton modèle LLM

Hermes a besoin d'un LLM pour fonctionner. Quelques options :

- Héberger le modèle en local — possible, mais ça bouffe de l'espace disque
- **OpenRouter** — accès à plein de modèles en ligne 👉 [openrouter.ai](https://openrouter.ai)
- Ton abonnement ChatGPT ou Claude si t'en as un
- **Nous Research** — l'équipe derrière Hermes, à partir de 20 $/mois

Moi j'utilise **DeepSeek v3 via OpenRouter** — très bon et beaucoup moins cher.

---

![Configuration LLM](/images/blog/8.png)

### Connecter Telegram

Par défaut tu parles à Hermes via l'app ou le terminal. Mais tu peux aussi le connecter à Telegram, Discord, etc. Je recommande l'un des deux.

On configure **Telegram** :

**1. Créer un bot**

Envoie un message à **@BotFather** sur Telegram, tape `/newbot`, donne un nom puis un identifiant qui se termine par `bot`. Il te donnera un **Bot Token** — copie-le.

![BotFather](/images/blog/9.png)
![Bot Token](/images/blog/10.png)

**2. Connecter le token à Hermes**

Tu colles le token dans le champ prévu dans la config de Hermes, tu confirmes.

![Token Hermes](/images/blog/11.png)
![Configuration](/images/blog/12.png)
![Confirmation](/images/blog/13.png)

**3. Sélectionner les outils**

Laisse par défaut pour commencer.

![Outils](/images/blog/14.png)

**4. Vérification**

Écris un message à ton bot sur Telegram. Il te demande un code — tu copies juste la commande dans ton terminal.

🎉 C'est bon, l'agent tourne.

![Agent opérationnel](/images/blog/15.png)

---

## Installer Oh My Hermes

[Oh My Hermes](https://github.com/Salomondiei08/oh-my-hermes) c'est un workflow de planification qui rend Hermes bien plus structuré. N'oublie pas de mettre une ⭐ sur le repo !

L'installation est vraiment simple — t'envoies juste ça à ton agent :

```
Install Oh My Hermes on this project.
1. Clone the repo: git clone https://github.com/salomondiei08/oh-my-hermes /tmp/oh-my-hermes
2. Run the installer: bash /tmp/oh-my-hermes/install.sh
3. Bootstrap this project: bash /tmp/oh-my-hermes/scripts/bootstrap.sh
4. Verify everything installed: bash /tmp/oh-my-hermes/scripts/verify.sh
Then tell me what's missing and what I need to fill in.
```

Il gère le reste tout seul.

---

## Connecter les outils

Ton agent a juste besoin des accès — il trouve tout seul comment s'en servir.

| Besoin | Outil | Lien |
|---|---|---|
| Génération d'images | OpenAI API | [platform.openai.com/api-keys](https://platform.openai.com/settings/organization/api-keys) |
| Publication réseaux | Buffer | [buffer.com/api](https://buffer.com/api) |
| Génération de vidéos | SeedDance ou Google Veo | — |
| Emails | Gmail ou SMTP | — |

Tu lui donnes les clés, il fait le travail.

---

Merci d'avoir suivi. La prochaine étape c'est de lui donner un vrai objectif et voir ce qu'il fait.

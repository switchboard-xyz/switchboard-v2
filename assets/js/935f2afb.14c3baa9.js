"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/introduction","docId":"introduction"},{"type":"link","label":"Program","href":"/program","docId":"program"},{"type":"category","label":"Oracle Queue","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/queue/","docId":"queue/architecture"},{"type":"link","label":"Private Queues","href":"/queue/private-queues","docId":"queue/private-queues"}]},{"type":"category","label":"Oracles","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/oracle/","docId":"oracle/architecture"},{"type":"category","label":"Oracle Operator","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Requirements","href":"/oracle/operator/","docId":"oracle/operator/requirements"},{"type":"link","label":"Docker","href":"/oracle/operator/docker","docId":"oracle/operator/docker"},{"type":"link","label":"Google Cloud Platform","href":"/oracle/operator/gcp","docId":"oracle/operator/gcp"},{"type":"link","label":"Monitoring","href":"/oracle/operator/monitoring","docId":"oracle/operator/monitoring"}]}]},{"type":"category","label":"Data Feeds","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/feed/","docId":"feed/architecture"},{"type":"link","label":"Feed Operator","href":"/feed/operator","docId":"feed/operator"},{"type":"link","label":"Directory","href":"/feed/directory","docId":"feed/directory"},{"type":"category","label":"Publisher","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/feed/publisher/","docId":"feed/publisher/overview"}]}]},{"type":"category","label":"Randomness","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/randomness/","docId":"randomness/architecture"}]},{"type":"category","label":"Buffer Relayers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/buffer-relayer/","docId":"buffer-relayer/architecture"}]},{"type":"category","label":"Developers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Developer Resources","href":"/developers/","docId":"developers/resources"},{"type":"link","label":"Localnet Integration","href":"/developers/localnet","docId":"developers/localnet"},{"type":"link","label":"Oracle Queue","href":"/developers/queue","docId":"developers/queue"},{"type":"link","label":"Oracles","href":"/developers/oracle","docId":"developers/oracle"},{"type":"link","label":"Data Feeds","href":"/developers/feed","docId":"developers/feed"},{"type":"link","label":"Randomness","href":"/developers/randomness","docId":"developers/randomness"},{"type":"link","label":"Buffer Relayers","href":"/developers/buffer-relayer","docId":"developers/buffer-relayer"}]},{"type":"link","label":"Switchboard DAO","href":"/dao","docId":"dao"}]},"docs":{"buffer-relayer/architecture":{"id":"buffer-relayer/architecture","title":"Architecture","description":"TODO","sidebar":"tutorialSidebar"},"dao":{"id":"dao","title":"Switchboard DAO","description":"The Switchboard DAO operates a set of oracle queues and provide the mechanisms for stakeholders to contribute, join, and vote on new proposals. More information coming soon.","sidebar":"tutorialSidebar"},"developers/buffer-relayer":{"id":"developers/buffer-relayer","title":"Buffer Relayers","description":"Read a Buffer Relayer","sidebar":"tutorialSidebar"},"developers/feed":{"id":"developers/feed","title":"Data Feeds","description":"# anchor-feed-parser","sidebar":"tutorialSidebar"},"developers/localnet":{"id":"developers/localnet","title":"Localnet Integration","description":"You may wish to run a localnet version of Switchboard to watch how your program reacts to data feed updates. The following will walk through how to create your own Oracle Queue and Oracle and output some helper scripts to quickly load the environment in your tests.","sidebar":"tutorialSidebar"},"developers/oracle":{"id":"developers/oracle","title":"Oracles","description":"Create","sidebar":"tutorialSidebar"},"developers/queue":{"id":"developers/queue","title":"Oracle Queue","description":"\x3c!--","sidebar":"tutorialSidebar"},"developers/randomness":{"id":"developers/randomness","title":"Randomness","description":"# anchor-vrf-parser","sidebar":"tutorialSidebar"},"developers/resources":{"id":"developers/resources","title":"Developer Resources","description":"<MarkdownImage","sidebar":"tutorialSidebar"},"feed/architecture":{"id":"feed/architecture","title":"Architecture","description":"An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce a single, deterministic result. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal.","sidebar":"tutorialSidebar"},"feed/directory":{"id":"feed/directory","title":"Directory","description":"This page includes some example jobs for building a data feed. You can view the expected JSON schema at /api/tasks.","sidebar":"tutorialSidebar"},"feed/operator":{"id":"feed/operator","title":"Feed Operator","description":"This page gives an overview on how to configure and operate a Switchboard feed.","sidebar":"tutorialSidebar"},"feed/publisher/overview":{"id":"feed/publisher/overview","title":"Overview","description":"# publish.switchboard.xyz","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Switchboard is a community-driven, decentralized oracle network built on Solana that allows anyone to publish on-chain data for smart contract developers to reliably build upon.","sidebar":"tutorialSidebar"},"oracle/architecture":{"id":"oracle/architecture","title":"Architecture","description":"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from an oracle queue. An oracle queue assigns updates to oracles in a round robin fashion.","sidebar":"tutorialSidebar"},"oracle/operator/docker":{"id":"oracle/operator/docker","title":"Docker","description":"You can run an oracle locally and assign it to your own oracle queue to test how your program may operate in production. Mainnet oracles should always be run in high availability environments with some set of monitoring capabilities.","sidebar":"tutorialSidebar"},"oracle/operator/gcp":{"id":"oracle/operator/gcp","title":"Google Cloud Platform","description":"Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.","sidebar":"tutorialSidebar"},"oracle/operator/monitoring":{"id":"oracle/operator/monitoring","title":"Monitoring","description":"Metrics","sidebar":"tutorialSidebar"},"oracle/operator/requirements":{"id":"oracle/operator/requirements","title":"Requirements","description":"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from its assigned oracle queue.","sidebar":"tutorialSidebar"},"program":{"id":"program","title":"Program","description":"Program State Account","sidebar":"tutorialSidebar"},"queue/architecture":{"id":"queue/architecture","title":"Architecture","description":"An oracle queue allocates and protects a set of oracles, which act as a resource pool for on-chain programs to utilize. Oracle queues currently support fulfilling update request for the following:","sidebar":"tutorialSidebar"},"queue/private-queues":{"id":"queue/private-queues","title":"Private Queues","description":"A private queue is any Oracle Queue not controlled by the Switchboard DAO.","sidebar":"tutorialSidebar"},"randomness/architecture":{"id":"randomness/architecture","title":"Architecture","description":"Learn how to use Switchboard\'s Verifiable Random Functions","sidebar":"tutorialSidebar"}}}')}}]);
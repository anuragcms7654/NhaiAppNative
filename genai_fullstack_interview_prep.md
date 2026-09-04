# Full Stack AI (GenAI) Engineer — Interview Prep Roadmap

Background assumed: 4 yrs React/Node/FastAPI, 2 projects (RAG QA app, AI code-agent), built with AI-assisted coding. Goal: be able to explain *why*, not just *that it works*.

Interviewers for this role rarely ask you to derive backprop. They ask: "Why did you chunk that way?", "What happens when retrieval returns garbage?", "How do you stop the agent from looping forever?", "How would this break at 10x traffic?" That's what this guide targets.

---

## Phase 1 — LLM Fundamentals (just enough, not a ML degree)

You need to talk fluently about the black box you're calling, not train one.

- **What an LLM actually does**: next-token prediction, autoregressive generation, why hallucination is a structural property, not a bug.
- **Tokens & tokenization**: why token count ≠ word count, why this matters for cost/context limits (tiktoken, BPE basics).
- **Context window**: what it is, what happens when you exceed it, why "just add more context" isn't free (cost, latency, "lost in the middle" effect).
- **Temperature, top_p, top_k, max_tokens, frequency/presence penalty** — know what each does and when you'd change it.
- **System prompt vs user prompt vs assistant messages** — the role structure, why system prompt placement matters.
- **Embeddings**: what a vector represents, cosine similarity vs dot product vs Euclidean distance, dimensionality (e.g. 1536 for `text-embedding-3-small`).
- **Difference between a base model, instruct/chat-tuned model, and a reasoning model** — and when you'd pick which.

**Likely question**: "Why does the same prompt give different outputs each time?" / "How would you reduce hallucination?"

---

## Phase 2 — Prompt Engineering (they will test this live)

- Zero-shot vs few-shot vs chain-of-thought prompting.
- Structured output: forcing JSON output, function calling / tool use schemas, why this is more reliable than asking nicely.
- System prompt design: role, constraints, output format, guardrails.
- Prompt injection — what it is, why it's dangerous, basic mitigations (input sanitization, delimiters, least-privilege tool access).
- Be ready to **live-prompt** something in the interview (e.g. "write a prompt that extracts structured data from this text").

---

## Phase 3 — RAG, Deep Dive (this is your strongest project — use it, but expect probing)

Go through your own project and be able to answer each of these about the choices you made:

1. **Ingestion & chunking**
   - Fixed-size vs recursive vs semantic chunking. Why chunk at all?
   - Chunk size/overlap trade-offs (too small = loses context, too big = dilutes relevance).
   - How do you handle tables, code blocks, images inside documents?

2. **Embeddings & vector store**
   - Which embedding model, why. Local vs API-based embeddings (relevant since you did an offline mode).
   - Vector DB choices: FAISS, Chroma, Pinecone, Weaviate, Qdrant, pgvector — trade-offs (managed vs self-hosted, metadata filtering, scale).
   - Indexing strategy (HNSW vs IVF) — at least know these names and roughly what they trade off (speed vs recall).

3. **Retrieval**
   - Top-k retrieval, similarity threshold.
   - **Hybrid search** (keyword/BM25 + vector) — why pure vector search fails on exact terms (IDs, acronyms, names).
   - **Reranking** (cross-encoder rerankers like Cohere rerank) — why a second-pass reranker improves precision.
   - Query rewriting / HyDE (Hypothetical Document Embeddings).

4. **Generation**
   - How you assemble the final prompt from retrieved chunks (context stuffing, citations).
   - Handling "I don't know" / no-answer-in-context cases — grounding, refusal behavior.

5. **Offline vs online model** (you specifically did this — great talking point)
   - Local model serving: Ollama, llama.cpp, vLLM — be able to name what you used and why.
   - Trade-offs: latency, cost, privacy/data residency, quality gap vs hosted models (GPT/Claude/Gemini APIs).

6. **Evaluation** (weakest area for most vibe-coded projects — study this)
   - How do you know if RAG is "good"? Retrieval metrics (precision@k, recall@k, MRR) vs generation metrics (faithfulness, answer relevancy).
   - Tools: RAGAS, TruLens, DeepEval — even just knowing these names signals you understand evaluation is a real discipline, not an afterthought.

**Likely question**: "Your RAG system returns wrong answers 1 in 10 times — walk me through how you'd debug it." (Answer should separate: is it a retrieval problem or a generation problem?)

---

## Phase 4 — Agentic AI, Deep Dive (your code-agent project)

1. **Core agent loop**: ReAct pattern (Reason → Act → Observe → repeat). Be able to draw/explain this loop.
2. **Tool use / function calling**: how the model decides to call a tool, how results get fed back in, JSON schema for tool definitions.
3. **Frameworks — know the landscape, even if you used one lightly**:
   - LangChain / LangGraph (graph-based agent orchestration, state machines)
   - LlamaIndex (data-centric agents)
   - CrewAI, AutoGen / Semantic Kernel (multi-agent)
   - Anthropic's own agent SDK patterns / MCP (Model Context Protocol) — increasingly asked about now since it's become an industry standard for tool integration.
4. **Memory**: short-term (conversation buffer) vs long-term (vector store-backed memory) vs working memory/scratchpad.
5. **Planning**: single-shot vs multi-step planning, task decomposition, plan-and-execute pattern.
6. **Guardrails for agents that touch code/files** (directly relevant to your project):
   - Sandboxing execution, permission scoping (what files/commands can it touch), diff review before applying changes, rollback strategy.
   - Preventing infinite loops / runaway tool calls — max iteration limits, cost caps.
7. **Multi-agent systems**: orchestrator-worker pattern, when multiple specialized agents beat one general agent, communication between agents.

**Likely question**: "Your code agent decides to delete a file it shouldn't — how does your system prevent or recover from that?" This is exactly the kind of question that separates "I used copilot to build an agent" from "I understand agentic systems." Have a real answer.

---

## Phase 5 — Full-Stack AI System Design (this is where "full stack" gets tested)

They will likely give you a system design prompt like "design a customer-support chatbot over our internal docs" or "design an AI agent that can modify a codebase." Structure your answer around:

- **Architecture**: frontend (streaming UI) → API layer (FastAPI/Node) → orchestration layer (LangChain/custom) → LLM provider(s) → vector DB / tools / external APIs.
- **Streaming responses**: SSE or WebSockets for token-by-token UI updates — you know React, so be ready to explain how you'd stream tokens into a UI.
- **Async & queuing**: long-running agent tasks shouldn't block HTTP requests — background jobs (Celery/BullMQ), polling or websockets for status.
- **Caching**: semantic caching of prompts/responses to cut cost and latency.
- **Rate limiting & cost control**: token budgets per user, request throttling, model fallback (cheap model first, escalate to expensive model).
- **Observability**: logging prompts/responses, tracing (LangSmith, Langfuse, Helicone), latency and cost dashboards.
- **Security**: prompt injection defense, PII redaction, output filtering, least-privilege tool/API access for agents.
- **Multi-model strategy**: routing between models (e.g. cheap/fast model for simple queries, frontier model for complex reasoning) — a very real, very "senior" answer to mention.

---

## Phase 6 — Fine-tuning vs RAG vs Prompting (classic conceptual question)

Be able to give a crisp answer:
- **Prompting** — fastest, no training, good for most integration work (this is 90% of what you'll do in this role).
- **RAG** — when the model needs access to current/proprietary knowledge it wasn't trained on.
- **Fine-tuning** — when you need consistent style/format/behavior, not new knowledge; expensive, slower to iterate, doesn't reliably add facts.
- **RLHF/DPO** — just know these exist and roughly what they're for (behavior alignment), you won't be expected to implement them for this role.

---

## Phase 7 — Practical / Live-coding Prep

For this role, live coding often looks like:
- Build a small FastAPI endpoint that calls an LLM API with function calling and returns structured JSON.
- Add streaming to an endpoint.
- Debug a broken RAG pipeline (e.g., "why is retrieval returning irrelevant chunks").
- Extend an agent with a new tool.

**Do this**: rebuild a stripped-down version of your RAG project from scratch, without AI assistance, at least once. Even a minimal version (load doc → chunk → embed → store → retrieve → generate) in ~150 lines. This is the single highest-leverage thing you can do — it converts "I know the overview" into "I can produce this under pressure."

---

## Phase 8 — Be Ready to Defend Your Own Projects

Interviewers dig into resume projects hard for this role because "vibe coded" projects are common now and they're specifically screening for genuine understanding. For each project, prepare answers to:

- Why this chunking size/vector DB/framework, and what else did you consider?
- What was the hardest bug, and how did you actually debug it (not "Claude fixed it")?
- What would you change if you rebuilt it today?
- How would it perform at 100x scale / 100x more users?
- What's the failure mode, and what happens when it fails?

If you can't yet answer these fluently, that's your actual prep priority — more than any new topic.

---

## Suggested 2-Week Study Order

1. **Days 1–3**: Phase 1 + 2 (LLM fundamentals, prompting) — foundation for everything else.
2. **Days 4–7**: Phase 3 (RAG deep dive) mapped directly onto your own project — rebuild the minimal version.
3. **Days 8–10**: Phase 4 (Agentic AI) mapped onto your code-agent project.
4. **Days 11–12**: Phase 5 (system design) — practice explaining architecture out loud, even alone.
5. **Days 13–14**: Phase 7 & 8 — mock interview yourself on your own projects, do one live-coding rebuild.

---

## Quick Reference: Terms You Should Be Able to Define in One Sentence

RAG, chunking, embedding, vector database, cosine similarity, top-k, reranking, hybrid search, HyDE, ReAct, function/tool calling, MCP, agent memory, context window, hallucination, prompt injection, temperature, few-shot prompting, fine-tuning, RLHF, semantic caching, streaming (SSE), token, system prompt, guardrails, multi-agent orchestration.

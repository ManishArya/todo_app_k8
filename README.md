# LLM QA BOT

<!-- ABOUT THE BOT -->

## About The BOT

It is LLM Based QA Bot which read PDF and store embedding into vector DB and
user ask the questions then it will fetch from Vector DB and rhen redefine the
queries using LLM

### Technology Used

- Python
- Pinecone
- langchain
- Hugging face
- Google Colob

### Execution instruction

1. Upload ibynb file in google colob or simillar tools
2. Download required libraries which is mentioned in the file itself
3. update the pdf path
4. update the pinecone API key
5. For LLM, it requires GPU, it should be

### security

1. store API Key in valut (eg. Azure)
2. Use JWT/OAuth for authentication and authorization
3. Use HTTPS (SSL/TLS)
4. Implement the rate limiting

### scalability

1. Deploy the QA bot on the K8
2. Use Load balancer
3. Use HPA

### performance

1. For faster response implement cache (Redis)

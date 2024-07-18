
![](javaRAG/Project_Samples/img.png)

# Java-RAG-with-Spring-AI
A local AI chatbot using Java and Spring Boot, leveraging LangChain4j and a local Ollama


![](https://img.shields.io/badge/Status-Work%20in%20Progress-yellow)
![](https://img.shields.io/badge/Java-17+-red)
![](https://img.shields.io/badge/Spring%20Boot-3.2.5+-green)
![](https://img.shields.io/badge/Vaadin-22.4.0+-blue)
![](https://img.shields.io/badge/LangChain4j-0.1.0-blue)


## 📝 Description 📝

This app demonstrates how you can create a custom AI chatbot that can use your own documents to answer questions using RAG (retrieval augmented generation).
The chatbot uses [LangChain4j](https://github.com/langchain4j/langchain4j) and the OpenAI API to generate responses and [Vaadin](http://vaadin.com/) to create the user interface.

> [!IMPORTANT]
> Before you can use the application you need to:
> 1. Configure the documentation location
> 2. Configure either OpenAI or a local LLM using Ollama

## 🛠️ Configuration 🛠️

### Configuring documentation location

Update the `docs.location` property in `application.properties` to point to a folder with relevant documents.
LangChain4j uses Apache Tika internally when processing the files, so most file types work.

### Using Open AI 

OpenAI gives you better quality answers but requires you to send data to a 3rd party.

To use OpenAI, get an [API key](https://platform.openai.com/api-keys) and configure it in `application.properties`.
Optionally, you can also configure the model in the properties.

### Using a local LLM

Using a local model allows you to keep your data on your local computer, but the quality of answers will not be as good as with OpenAI.

Prerequisites :Install [Ollama](https://ollama.com/)

Comment out the OpenAI section of `application.properties` and uncomment the Ollama section.

##### Possible models to use with Ollama
- llama3: 8b model from Meta. ```ollama run llama3```
- llama3: 80b model from Meta. ```ollama run llama3:70b```
- phi3: 3.8b model from Microsoft. ```ollama run phi3:latest```
- phi3: 14b model from Microsoft. ```ollama run phi3:14b```
- dbrx: 132b model from Databricks. ```ollama run dbrx```

There are multiple other models available from the likes of Google, IBM, Mistral, and more.

 [A list of all the models available on Ollama](https://ollama.com/library)

### Optional: Embedding store (Vector DB)

By default, the application uses an in-memory embedding store. This is fine for demos and small amounts of data.
If you need to store more documents, consider using any of the [embedding stores that LangChain4j supports](https://docs.langchain4j.dev/integrations/embedding-stores/).

## ▶️ Running the application ▶️

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project. Read more on [how to import Vaadin projects to different IDEs](https://vaadin.com/docs/latest/guide/step-by-step/importing) (Eclipse, IntelliJ IDEA, NetBeans, and VS Code).

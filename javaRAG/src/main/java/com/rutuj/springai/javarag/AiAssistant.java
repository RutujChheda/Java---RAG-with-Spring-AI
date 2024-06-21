package com.rutuj.springai.javarag;

import dev.langchain4j.service.MemoryId;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.TokenStream;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface AiAssistant {

    @SystemMessage("""
            You are a friendly and helpful assistant.
            I will give you a book for reference and ask you questions based on the book.
            Answer the questions as accurately as possible using the provided book.
            If you do not know the answer, say "I don't know".
            If the answer is not in the book, say "I don't know".
            """)
    TokenStream chat(@MemoryId String chatId, @UserMessage String userMessage);
}

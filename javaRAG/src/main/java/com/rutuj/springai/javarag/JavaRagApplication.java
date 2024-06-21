package com.rutuj.springai.javarag;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.page.Push;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Push
@SpringBootApplication
@Theme(value = "doc-chat")
public class JavaRagApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(JavaRagApplication.class, args);
    }

}

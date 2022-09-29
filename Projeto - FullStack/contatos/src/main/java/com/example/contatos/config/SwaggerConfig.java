package com.example.contatos.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                    .select()
                    .apis(RequestHandlerSelectors.basePackage("com.example.contatos.controllers"))
                    .build()
                    .useDefaultResponseMessages(false)
                    .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("API de Lista de Contatos")
            .description("Lista de contatos")
            .version("1.0.0")
            .license("Apache License Version 2.0")
            .contact(new Contact("Luiz", "luiz-dev.com", "luiz@dev.com"))
            .licenseUrl("https://www.apache.org/licenses/LICENSE-2.0")
            .build(); 
    }
}
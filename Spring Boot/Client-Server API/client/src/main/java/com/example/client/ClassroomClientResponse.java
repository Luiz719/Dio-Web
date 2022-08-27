package com.example.client;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ClassroomClientResponse {
    private Integer id;
    private Integer number;
}
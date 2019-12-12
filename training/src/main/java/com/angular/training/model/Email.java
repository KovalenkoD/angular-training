package com.angular.training.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Email extends BaseEntity {
    private String value;
    private Boolean primary;
}

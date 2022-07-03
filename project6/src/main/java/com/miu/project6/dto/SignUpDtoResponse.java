package com.miu.project6.dto;

import com.miu.project6.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignUpDtoResponse {
    private User user;
}

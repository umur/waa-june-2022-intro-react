package com.example.lab6.service;

import com.example.lab6.dto.*;

public interface UaaService {
    LoginDtoResponse login(LoginDtoRequest loginRequest);

    LoginDtoResponse refreshToken(RefreshTokenDtoRequest refreshTokenRequest);

    SignUpDtoResponse signup(SignUpDtoRequest signUpRequest);
}

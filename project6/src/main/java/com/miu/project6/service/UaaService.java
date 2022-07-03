package com.miu.project6.service;

import com.miu.project6.dto.*;

public interface UaaService {
    LoginDtoResponse login(LoginDtoRequest loginRequest);

    LoginDtoResponse refreshToken(RefreshTokenDtoRequest refreshTokenRequest);

    SignUpDtoResponse signup(SignUpDtoRequest signUpRequest);
}
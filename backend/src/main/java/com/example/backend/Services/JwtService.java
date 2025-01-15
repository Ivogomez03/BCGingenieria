package com.example.backend.Services;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.backend.Models.UsuarioGeneral;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    private static final String SECRET_KEY = "5489385493DASFDSGH5645H634649538003890";

    public String getToken(UserDetails usuarioGeneral) {
        return getToken(new HashMap<>(), usuarioGeneral);
    }

    private String getToken(Map<String, Object> extraClaims, UserDetails usuarioGeneral) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(usuarioGeneral.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key getKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}

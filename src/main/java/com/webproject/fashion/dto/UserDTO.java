package com.webproject.fashion.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor // 기본 생성자를 자동으로 만들어준다.
@AllArgsConstructor
@ToString
// Dto 라는 클래스는 회원정보에 필요한 내용들을 필드로 정리하고 그 필드에 대해서 private으로 지정
public class UserDTO {
    private String userid;
    private String userpwd;
    private String username;
    private String useremail;
}

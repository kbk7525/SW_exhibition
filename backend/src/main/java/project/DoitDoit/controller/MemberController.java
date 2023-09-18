package project.DoitDoit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.DoitDoit.dto.MemberResDTO;
import project.DoitDoit.service.MemberService;


@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/index")
    public ResponseEntity<String> login(@RequestBody MemberResDTO memberResDTO) {
        String userId = memberResDTO.getUserId();
        String password = memberResDTO.getPassword();

        if(memberService.authenticateUser(userId, password)) {
            return ResponseEntity.ok("로그인 성공");
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("인증 실패");
        }
    }
}

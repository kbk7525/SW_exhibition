package project.DoitDoit.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import project.DoitDoit.DTO.MemberDTO;
import project.DoitDoit.entity.MemberEntity;
import project.DoitDoit.service.MemberService;

@RestController
@AllArgsConstructor
public class MemberResController {

    private final MemberService memberService;

    @PostMapping("/board")
    public ResponseEntity main(MemberDTO memberDTO) {
        return ResponseEntity.ok(memberService.login(memberDTO));
    }

}

package project.DoitDoit.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import project.DoitDoit.DTO.MemberDTO;
import project.DoitDoit.service.MemberService;

@Controller
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping
    public String index() {
        return "index";
    }
    @PostMapping("/main")
    public String main(MemberDTO memberDTO) {
        MemberDTO loginRes = memberService.login(memberDTO);
        if(loginRes != null) {
            return "main";
        }
        else {
            return "redirect:/index";
        }
    }
}

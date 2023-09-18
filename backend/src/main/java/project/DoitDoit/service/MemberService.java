package project.DoitDoit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.dto.MemberDTO;
import project.DoitDoit.entity.MemberEntity;
import project.DoitDoit.repository.MemberRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public boolean authenticateUser(String userId, String password) {
        MemberEntity member = memberRepository.findByUserId(userId);
        if(member != null && password.equals(member.getPassword())) {
            return true;
        }
        return false;
    }
}

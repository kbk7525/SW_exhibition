package project.DoitDoit.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.DTO.MemberDTO;
import project.DoitDoit.entity.MemberEntity;
import project.DoitDoit.repository.MemberRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    //회원가입
    public void save(MemberDTO memberDTO) {
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);
    }

    public MemberDTO login(MemberDTO memberDTO) {
        Optional<MemberEntity> byId = memberRepository.findById(memberDTO.getMember_id());
        if(byId.isPresent()) {
            MemberEntity memberEntity = byId.get();
            if(memberEntity.getPassword().equals(memberDTO.getPassword())) {
                MemberDTO dto = MemberDTO.toMemberDTO(memberEntity);
                return dto;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
}

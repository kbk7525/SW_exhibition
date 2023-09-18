package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.DoitDoit.entity.MemberEntity;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberResDTO {

    private String userId;
    private String password;

    public static MemberDTO toMemberResDTO(MemberEntity memberEntity) {
        return MemberDTO.builder()
                .userId(memberEntity.getUserId())
                .password(memberEntity.getPassword())
                .build();
    }
}

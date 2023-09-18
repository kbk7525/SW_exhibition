package project.DoitDoit.dto;

import lombok.*;
import project.DoitDoit.entity.MemberEntity;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {

    private Long memberId;
    private String userId;
    private String name;
    private String password;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity) {
        return MemberDTO.builder()
                .memberId(memberEntity.getMemberId())
                .name(memberEntity.getName())
                .userId(memberEntity.getUserId())
                .password(memberEntity.getPassword())
                .build();
    }
}

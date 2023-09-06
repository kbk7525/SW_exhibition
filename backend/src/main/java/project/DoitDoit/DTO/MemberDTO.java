package project.DoitDoit.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.DoitDoit.entity.MemberEntity;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {

    private Long member_id;
    private String name;
    private String user_id;
    private String password;
    private String univ;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity) {
        return MemberDTO.builder()
                .name(memberEntity.getName())
                .univ(memberEntity.getUniv())
                .build();
    }
}

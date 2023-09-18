package project.DoitDoit.entity;

import jakarta.persistence.*;
import lombok.*;
import project.DoitDoit.dto.MemberDTO;

@Entity
@Table(name = "member")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class MemberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column
    private String name;

    @Column
    private String userId;

    @Column
    private String password;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO) {
        return MemberEntity.builder()
                .memberId(memberDTO.getMemberId())
                .name(memberDTO.getName())
                .userId(memberDTO.getUserId())
                .password(memberDTO.getPassword())
                .build();
    }
}
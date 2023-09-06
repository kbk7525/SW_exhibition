package project.DoitDoit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.DoitDoit.DTO.MemberDTO;

@Entity
@Table
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    @Column
    private String name;

    @Column
    private String user_id;

    @Column
    private String password;

    @Column
    private String univ;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO) {
        return MemberEntity.builder()
                .name(memberDTO.getName())
                .univ(memberDTO.getUniv())
                .build();
    }
}

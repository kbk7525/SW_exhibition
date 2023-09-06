package project.DoitDoit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.DoitDoit.DTO.BoardDTO;

import java.util.Date;

@Entity
@Table
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long board_id;

    @Column
    private Long member_id;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private Boolean favorites;

    @Column
    private Date d_day;

    public static BoardEntity toBoardEntity(BoardDTO boardDTO) {
        return BoardEntity.builder()
                .board_id(boardDTO.getBoard_id())
                .member_id(boardDTO.getMember_id())
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .favorites(boardDTO.getFavorites())
                .d_day(boardDTO.getD_day())
                .build();
    }
}

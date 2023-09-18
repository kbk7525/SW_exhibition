package project.DoitDoit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.DoitDoit.dto.BoardDTO;

import java.util.Date;

@Entity
@Table(name="board")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column
    private Long memberId;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private Boolean favorites;

    @Column
    private Date dDay;

    public static BoardEntity toBoardEntity(BoardDTO boardDTO) {
        return BoardEntity.builder()
                .boardId(boardDTO.getBoardId())
                .memberId(boardDTO.getMemberId())
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .favorites(boardDTO.getFavorites())
                .dDay(boardDTO.getDDay())
                .build();
    }
}

package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.DoitDoit.entity.BoardEntity;

import java.util.Date;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {

    private Long boardId;
    private String title;
    private String content;
    private Long memberId;
    private Boolean favorites;
    private Date dDay;

    public static BoardDTO toBoardDTO(BoardEntity boardEntity) {
        return BoardDTO.builder()
                .boardId(boardEntity.getBoardId())
                .memberId(boardEntity.getMemberId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .favorites(boardEntity.getFavorites())
                .dDay(boardEntity.getDDay())
                .build();
    }
}

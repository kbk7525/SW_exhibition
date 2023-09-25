package project.DoitDoit.dto;

import lombok.*;
import project.DoitDoit.entity.BoardEntity;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {
    private Long boardId;
    private String title;
    private String content;
    private String today;

    public BoardDTO toDTO(BoardEntity boardEntity) {
        return BoardDTO.builder()
                .boardId(boardEntity.getBoardId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .today(boardEntity.getToday())
                .build();
    }
}

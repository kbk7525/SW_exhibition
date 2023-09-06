package project.DoitDoit.DTO;

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

    private Long board_id;
    private String title;
    private String content;
    private Long member_id;
    private Boolean favorites;
    private Date d_day;

    public static BoardDTO toBoardDTO(BoardEntity boardEntity) {
        return BoardDTO.builder()
                .board_id(boardEntity.getBoard_id())
                .member_id(boardEntity.getMember_id())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .favorites(boardEntity.getFavorites())
                .d_day(boardEntity.getD_day())
                .build();
    }
}

package project.DoitDoit.dto;

import lombok.*;

import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {

    private Long boardId;
    private String title;
    private String content;
    private Long memberId;
    private Boolean favorites;
    private Date dDay;

}

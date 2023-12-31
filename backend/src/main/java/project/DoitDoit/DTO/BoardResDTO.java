package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.DoitDoit.entity.BoardEntity;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardResDTO {
    private String title;
    private String content;
    private String today;

    public BoardEntity toEntity() {
        return BoardEntity.builder()
                .title(title)
                .content(content)
                .today(today)
                .build();
    }
}

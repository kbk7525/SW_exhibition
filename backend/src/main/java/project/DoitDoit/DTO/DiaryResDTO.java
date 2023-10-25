package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.DoitDoit.entity.DiaryEntity;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DiaryResDTO {
    private String content;
    private String today;

    public DiaryEntity toEntity() {
        return DiaryEntity.builder()
                .content(content)
                .today(today)
                .build();
    }
}

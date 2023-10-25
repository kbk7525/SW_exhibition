package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.DoitDoit.entity.DiaryEntity;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiaryDTO {
    private Long diaryId;
    private String content;
    private String today;

    public DiaryDTO toDTO(DiaryEntity diaryEntity) {
        return DiaryDTO.builder()
                .diaryId(diaryEntity.getDiaryId())
                .content(diaryEntity.getContent())
                .today(diaryEntity.getToday())
                .build();
    }
}

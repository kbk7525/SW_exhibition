package project.DoitDoit.dto;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import project.DoitDoit.entity.BoardEntity;

import java.util.Date;

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

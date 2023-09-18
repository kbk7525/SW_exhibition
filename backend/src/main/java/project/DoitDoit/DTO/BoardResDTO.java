package project.DoitDoit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardResDTO {
    private String title;
    private String content;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dDay;
}

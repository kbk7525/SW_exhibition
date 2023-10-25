package project.DoitDoit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="diary")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiaryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diaryId;

    @Column
    private String content;

    @Column
    private String today;
}

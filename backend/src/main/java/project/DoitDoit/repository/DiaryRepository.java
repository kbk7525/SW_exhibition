package project.DoitDoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.DoitDoit.entity.DiaryEntity;

public interface DiaryRepository extends JpaRepository<DiaryEntity, Long> {
}

package project.DoitDoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.DoitDoit.entity.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
}

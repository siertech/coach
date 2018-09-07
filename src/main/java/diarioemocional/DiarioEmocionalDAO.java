package diarioemocional;
import com.siertech.stapi.model.GenericDAO;

import java.util.Date;

import org.springframework.stereotype.Repository;

@Repository
public class DiarioEmocionalDAO  extends GenericDAO<DiarioEmocional> {
	
	public DiarioEmocionalDAO() {
		
		super(DiarioEmocional.class);
		
	}
	
	@Override
	public DiarioEmocional addOrUpdate(DiarioEmocional item) {
		
		item.setHora(new Date());
		return super.addOrUpdate(item);
	}
	
	
}

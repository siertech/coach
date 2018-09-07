package diarioemocional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class DiarioEmocionalService extends GenericService<DiarioEmocional>   {

    @Autowired
	private DiarioEmocionalDAO diarioemocionalDAO;
	
	
}

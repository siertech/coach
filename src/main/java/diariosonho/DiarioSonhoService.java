package diariosonho;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class DiarioSonhoService extends GenericService<DiarioSonho>   {

    @Autowired
	private DiarioSonhoDAO diariosonhoDAO;
	
	
}

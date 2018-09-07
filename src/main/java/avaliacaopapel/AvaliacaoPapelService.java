package avaliacaopapel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class AvaliacaoPapelService extends GenericService<AvaliacaoPapel>   {

    @Autowired
	private AvaliacaoPapelDAO avaliacaopapelDAO;
	
	
}

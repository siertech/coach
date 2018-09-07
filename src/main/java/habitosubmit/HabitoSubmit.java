package habitosubmit;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;
import habito.Habito;

@Entity
@Table(name = "habitosubmit")
@Getter @Setter
public  class HabitoSubmit extends CrudClass {

	@ManyToOne
	@JoinColumn(name="habito_submit_habito_id")
    @JsonView(Views.Public.class)
	private  Habito habito;
	
	 @JsonView(Views.Public.class)
	 private String submitedDate;

}
